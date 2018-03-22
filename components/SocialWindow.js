import React from "react";
import {
  StyleSheet,
  View,
  Text,
  WebView,
  Dimensions,
  Alert,
  Linking
} from "react-native";
import * as Layout from "../constants/Layout";
import SocialMedia from "../constants/SocialMedia";

// const navAlert = () => {
// };
const WEBVIEW_REF = "webview";

class SocialWindow extends React.Component {
  // navigationAlert = () => {
  //   Alert.alert(
  //     "You are about to navigate away from this application. Continue?",
  //     [
  //       { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
  //       { text: "OK", onPress: () => console.log("OK Pressed") }
  //     ],
  //     { cancelable: false }
  //   );
  // };

  _onNavigationStateChange(navEvent) {
    if (
      navEvent.url !== "https://www.facebook.com/NASAPsyche/" &&
      navEvent.url !== "https://www.instagram.com/nasapsyche/?hl=en" &&
      navEvent.url !== "https://twitter.com/nasapsyche?lang=en"
    ) {
      //Alert user they are navigating to the browser.
      alert("Oh no!");
      //this.refs[WEBVIEW_REF].stopLoading();
      console.log(navEvent.url);
    }
  }

  render() {
    const initialUrl = this.props.uri;
    const windowName = this.props.windowName;
    let url = "";
    return (
      <WebView
        ref={WEBVIEW_REF}
        source={{ uri: initialUrl }}
        style={[styles.socialWindow]}
        onNavigationStateChange={this._onNavigationStateChange.bind(this)}
      />
    );
  }
}

const styles = StyleSheet.create({
  socialWindow: {
    flex: 1,
    marginTop: 20
  }
});

export default SocialWindow;
