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

// const navAlert = () => {
// };

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

  render() {
    const initialUrl = this.props.uri;
    const windowName = this.props.windowName;
    console.log(initialUrl);
    console.log(windowName);
    let url = "";

    return (
      <WebView
        ref={ref => {
          this.WebView = ref;
        }}
        source={{ initialUrl }}
        style={[styles.socialWindow]}
        onNavigationStateChange={navEvent => {
          if (
            navEvent.url !== "https://www.facebook.com/NASAPsyche/" &&
            navEvent.url !== "https://www.instagram.com/nasapsyche/?hl=en" &&
            navEvent.url !== "https://twitter.com/nasapsyche?lang=en"
          ) {
            this.WebView.stopLoading();
            alert(navEvent.url);
            Linking.openURL(navEvent.url).catch(err =>
              console.error("An error occurred with that link", err)
            );
          }
        }}
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
