import "react-native-gesture-handler";
import React, { Component } from "react";
import { Audio } from "expo-av";

import HomeScreen from "./screens/HomeScreen";
import GalleryScreen from "./screens/GalleryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";

const Stack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.loadAudio = this.loadAudio.bind(this);
  }

  audioUri =
    "http://download.publicradio.org/podcast/minnesota/classical/programs/free-downloads/2017/11/27/daily_download_20171127_128.mp3";

  state = {
    audioLoaded: false,
    fontLoaded: false,
  };

  componentDidMount() {
    this.loadAudio();
    this.loadfont();
  }

  componentWillUnmount() {
    this.soundObject.stopAsync();
  }

  async loadfont() {
    Font.loadAsync({
      "Beyond-Wonderland": require("./assets/fonts/Beyond-Wonderland.ttf"),
    });

    this.setState({
      fontLoaded: true,
    });
  }

  async loadAudio() {
    this.soundObject = new Audio.Sound();
    try {
      await this.soundObject.loadAsync(
        {
          uri: this.audioUri,
        },
        {
          shouldPlay: true,
          isLooping: true,
        }
      );
    } catch (e) {
      console.log("ERROR Loading Audio", e);
    } finally {
      this.setState({
        audioLoaded: true,
      });

      this.setState({ audioLoaded: true });
    }
  }

  render() {
    if (!this.state.audioLoaded || !this.state.fontLoaded) {
      return null;
    }

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Gallery" component={GalleryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
