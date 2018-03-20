import React from "react";
import { StyleSheet, View, Text, WebView, Dimensions } from "react-native";
import { Content, Card, CardItem, Body } from "native-base";
import InstagramData from "./InstagramData";

export default class InstagramWindow extends React.Component {
  constructor(props) {
    super();
    this.state = {
      feedData: []
    };
  }
  getFeedData() {
    return fetch("https://www.instagram.com/nasapsyche/?__a=1")
      .then(response => response.json())
      .then(responseJson => {
        // this.setState({feedData: responseJson.user.media.nodes})
        console.log("Instagram Window");
      })
      .catch(error => {
        console.error(error);
      });
  }

  componentDidMount() {
    this.getFeedData();
  }

  render() {
    return (
      <View>
        <Text>Test</Text>
      </View>
      // <InstagramData feedData = {this.state.feedData}/>
    );
  }
}

const styles = StyleSheet.create({
  socialWindow: {
    flex: 1,
    marginTop: 20,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});
