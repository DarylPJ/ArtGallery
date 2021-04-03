import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import ArtQuotes from "../components/ArtQuotes";
import ArtWork from "../components/ArtWork";

export default class GalleryScreen extends Component {
  state = {
    search: undefined,
  };

  constructor(props) {
    super(props);

    this.state.search = props?.route?.params?.search;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.ImageContainer}>
          <ArtWork search={this.state.search} />
        </View>
        <View style={styles.ArtQuotesContainer}>
          <ArtQuotes style={styles.ArtQuotes} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  ImageContainer: {
    flex: 5,
    paddingTop: 25,
    justifyContent: "center",
  },
  ArtQuotesContainer: {
    flex: 1,
    paddingTop: 25,
    justifyContent: "flex-end",
  },
  ArtQuotes: {
    color: "gold",
    fontSize: 20,
    textAlign: "center",
  },
});
