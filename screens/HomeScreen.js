import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import FancyPlayer from "../components/FancyPlayer";
import { SearchBar } from "react-native-elements";

export default class HomeScreen extends Component {
  state = {
    search: "",
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <View style={styles.container}>
        <FancyPlayer />
        <View style={styles.Header}>
          <Text style={[styles.Text, styles.headerText]}>
            Welcome to the Art Gallery
          </Text>
          <Text style={styles.Text}>The fanciest app on the play store.</Text>
        </View>
        <View style={styles.Content}>
          <View>
            <SearchBar
              placeholder="Search the collection"
              onChangeText={this.updateSearch}
              value={search}
            ></SearchBar>
          </View>
          <View style={{ paddingTop: 25 }}>
            <Button color="red" title="Random art"></Button>
          </View>
        </View>
        <View style={styles.Footer}>
          <Text style={styles.Text}>
            Please turn on sound for the full experience
          </Text>
          <Text style={[styles.Text, styles.RecognitionText]}>
            Powered by the metropolitan museum of art collection API
          </Text>
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
  Header: {
    flex: 1,
    paddingTop: 25,
  },
  Content: {
    flex: 2,
    paddingTop: 25,
    width: "100%",
  },
  Footer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  Text: {
    color: "gold",
    textAlign: "center",
    fontSize: 20,
  },
  headerText: {
    fontSize: 35,
  },
  RecognitionText: {
    color: "white",
    fontSize: 12,
  },
});
