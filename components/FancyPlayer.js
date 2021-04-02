import React, { Component } from "react";
import { View } from "react-native";
import { Audio } from "expo-av";

class FancyPlayer extends Component {
  constructor(props) {
    super(props);

    this.uri =
      "http://download.publicradio.org/podcast/minnesota/classical/programs/free-downloads/2017/11/27/daily_download_20171127_128.mp3";
    this.loadAudio = this.loadAudio.bind(this);
  }

  componentDidMount() {
    this.loadAudio();
  }

  componentWillUnmount() {
    this.soundObject.stopAsync();
  }

  async loadAudio() {
    this.soundObject = new Audio.Sound();
    try {
      await this.soundObject.loadAsync(
        {
          uri: this.uri,
        },
        {
          shouldPlay: true,
          isLooping: true,
        }
      );
    } catch (e) {
      console.log("ERROR Loading Audio", e);
    }
  }

  render() {
    return <View></View>;
  }
}

export default FancyPlayer;
