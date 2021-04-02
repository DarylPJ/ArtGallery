import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { TextInput } from "react-native";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.navigation = props.navigation;
  }

  state = {
    search: "",
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  handleSearch() {
    this.navigation.navigate("Gallery", {
      search: this.state.search,
    });
  }

  render() {
    const { search } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.Header}>
          <Text style={[styles.Text, styles.headerText]}>
            Welcome to the Art Gallery
          </Text>
          <Text style={styles.Text}>The fanciest app on the play store.</Text>
        </View>
        <View style={styles.Content}>
          <View style={{ paddingBottom: 20, paddingTop: 40 }}>
            <TextInput
              style={styles.TextInput}
              placeholderTextColor="black"
              backgroundColor="white"
              placeholder="Search the collection"
              onChangeText={this.updateSearch}
              onSubmitEditing={this.handleSearch.bind(this)}
              value={search}
            ></TextInput>
            <Button title="search" onPress={this.handleSearch.bind(this)} />
          </View>
          <View>
            <Button
              onPress={() => {
                this.navigation.navigate("Gallery");
              }}
              color="red"
              title="Random art"
            ></Button>
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
  TextInput: {
    height: 40,
  },
});
