import React from "react";
import { StyleSheet, View, Text, WebView, Dimensions } from "react-native";
import { Content, Card, CardItem, Body } from "native-base";

export default class InstagramWindow extends React.Component {
  getFeedData() {
    return fetch("https://www.instagram.com/nasapsyche/?__a=1")
      .then(response => response.json())
      .then(responseJson => {
        alert(responseJson);
      });
  }
  componentDidMount() {
    this.getFeedData();
  }

  render() {
    return (
      <Content>
        <Card>
          <CardItem>
            <Body>
              <Text>InstagramWindow</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
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
