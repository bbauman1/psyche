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
import AppLink from "react-native-app-link";
import AppIds from "../constants/AppIds";
import SocialMediaURLs from "../constants/SocialMediaURLs";

const WEBVIEW_REF = "webview";

class SocialWindow extends React.Component {
  state = {
    url: this.props.uri,
    app: this.props.app
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

  _onNavigationStateChange(navEvent) {
    if (
      navEvent.url !== "https://www.facebook.com/NASAPsyche/" &&
      navEvent.url !== "https://www.instagram.com/nasapsyche/?hl=en" &&
      navEvent.url !== "https://twitter.com/nasapsyche?lang=en"
    ) {
      console.log("URL: " + navEvent.url);
    }
  }

  render() {
    const initialUrl = this.state.url;
    console.log(this.state.app);
    // const windowName = this.props.windowName;
    let url = "";
    return (
      <WebView
        ref={WEBVIEW_REF}
        source={{ uri: initialUrl }}
        style={[styles.socialWindow]}
        onNavigationStateChange={this._onNavigationStateChange.bind(this)}
        startInLoadingState={true}
      />
    );
  }
}

const styles = StyleSheet.create({
  socialWindow: {
    flex: 1,
    marginTop: 20,
    width: Layout.width,
    height: Layout.height
  }
});

export default SocialWindow;
