import React, { Component } from "react";
import { Text, Image, Dimensions, View, StyleSheet } from "react-native";

const searchUri =
  "https://collectionapi.metmuseum.org/public/collection/v1/search";
const detailsUri =
  "https://collectionapi.metmuseum.org/public/collection/v1/objects/";

export default class ArtWork extends Component {
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

  render() {
    if (!this.state.currentArtData) {
      return null;
    }

    console.log(this.state.currentArtData.objectID);

    if (
      !this.state.currentArtData.artistDisplayName ||
      this.state.currentArtData.artistDisplayName == ""
    ) {
      this.state.currentArtData.artistDisplayName = "unknown";
    }

    return (
      <View>
        <Text style={styles.Text}>
          Title: {this.state.currentArtData.title}
        </Text>
        <Text style={[styles.Text, { paddingBottom: 20 }]}>
          Artist: {this.state.currentArtData.artistDisplayName}
        </Text>
        <Image
          style={styles.Image}
          source={{
            uri:
              this.state.currentArtData.primaryImageSmall ??
              this.state.currentArtData.primaryImage,
          }}
        ></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Image: {
    width: Dimensions.get("window").width,
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
  },
  Text: {
    color: "white",
    fontSize: 15,
  },
});
