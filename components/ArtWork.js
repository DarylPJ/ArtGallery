import React, { Component } from "react";
import { Animated, Text, Dimensions, View, StyleSheet } from "react-native";
import {
  PinchGestureHandler,
  PanGestureHandler,
  State,
} from "react-native-gesture-handler";

const searchUri =
  "https://collectionapi.metmuseum.org/public/collection/v1/search";
const detailsUri =
  "https://collectionapi.metmuseum.org/public/collection/v1/objects/";

export default class ArtWork extends Component {
  scale = new Animated.Value(1);
  translateX = new Animated.Value(0);
  state = {};

  constructor() {
    super();

    this._isMounted = false;
  }

  async componentDidUpdate(prevProps, prevState) {
    if (!this._isMounted) {
      return;
    }

    if (this.state.workIds && prevState.workIds != this.state.workIds) {
      await this.GetArtWork(this.state.workIds[0]);
    }
  }

  async componentDidMount() {
    this._isMounted = true;
    const response = await fetch(
      `${searchUri}?q=${this.props.search}&hasImages=true`
    );
    const data = await response.json();

    this.setState({ workIds: data.objectIDs.sort(() => Math.random() - 0.5) });
  }

  async componentWillUnmount() {
    this._isMounted - false;
  }

  async GetArtWork(id) {
    const response = await fetch(`${detailsUri}${id}`);
    const data = await response.json();

    this.setState({ currentArtData: data });
  }

  onPinchEvent = Animated.event([{ nativeEvent: { scale: this.scale } }], {
    useNativeDriver: true,
  });

  onPanEvent = Animated.event(
    [{ nativeEvent: { translationX: this.translateX } }],
    {
      useNativeDriver: true,
    }
  );

  onPinchStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      Animated.spring(this.scale, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
  };

  onPanStatChange = (event) => {
    if (Math.abs(event.nativeEvent.velocityX) > 1000) {
      //Change image
    }
  };

  render() {
    if (!this.state.currentArtData) {
      return null;
    }

    return (
      <View>
        <Text style={styles.Text}>
          Title: {this.state.currentArtData.title}
        </Text>
        <Text style={[styles.Text, { paddingBottom: 20 }]}>
          Artist: {this.state.currentArtData.artistDisplayName || "unknown"}
        </Text>
        <PanGestureHandler
          onGestureEvent={this.onPanEvent}
          onHandlerStateChange={this.onPanStatChange}
        >
          <Animated.View>
            <PinchGestureHandler
              onGestureEvent={this.onPinchEvent}
              onHandlerStateChange={this.onPinchStateChange}
            >
              <Animated.Image
                style={[
                  styles.Image,
                  {
                    transform: [
                      { scale: this.scale },
                      {
                        translateX: this.translateX,
                      },
                    ],
                  },
                ]}
                source={{
                  uri:
                    this.state.currentArtData.primaryImageSmall ??
                    this.state.currentArtData.primaryImage,
                }}
              ></Animated.Image>
            </PinchGestureHandler>
          </Animated.View>
        </PanGestureHandler>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Image: {
    width: Dimensions.get("window").width,
    aspectRatio: 1,
    resizeMode: "contain",
  },
  Text: {
    color: "white",
    fontSize: 15,
  },
});
