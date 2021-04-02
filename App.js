import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import FancyPlayer from "./FancyPlayer";
import { SearchBar } from "react-native-elements";

export default function App() {
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
        <Text style={[styles.Text]}>
          Use the Search box to search the collection or Click the random
          button.
        </Text>
        <SearchBar></SearchBar>
        <Button color="red" title="Random"></Button>
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
