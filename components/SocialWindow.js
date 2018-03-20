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

// const navAlert = () => {
// };

class SocialWindow extends React.Component {
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

  _onNavigationStateChange(webViewState) {
    console.log(webViewState.url);
    this.navigationAlert;
  }

  render() {
    return (
      <WebView
        source={{ uri: this.props.uri }}
        style={[styles.socialWindow]}
        onNavigationStateChange={this._onNavigationStateChange.bind(this)}
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
