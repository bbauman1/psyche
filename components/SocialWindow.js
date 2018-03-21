import React from "react";
import {
  StyleSheet,
  View,
  Text,
  WebView,
  Dimensions,
  Alert
} from "react-native";
import * as Layout from "../constants/Layout";

const initialUrl = this.props.uri;
let url = '';
// const navAlert = () => {
// };

class SocialWindow extends React.Component {

  state = {
    url: initialUrl,
  };

  navigationAlert = () => {
    Alert.alert(
      "You are about to navigate away from this application. Continue?",
      [
        { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  };

  _onNavigationStateChange = webViewState => {
    // if (navState.url.indexOf('https://www.google.com') === 0) {
    console.log(webViewState.url);
    alert(webViewState.url);
  }

  render() {
    return (
      <WebView
        source={{ uri: this.props.uri }}
        style={[styles.socialWindow]}
        onNavigationStateChange={this._onNavigationStateChange.bind(this)}
        scalesPageToFit
      />
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

export default SocialWindow;
