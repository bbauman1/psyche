import React from "react";
import {
  StyleSheet,
  View,
  Text,
  WebView,
  Dimensions,
  Alert,
  Linking,
  TouchableOpacity,
  ScrollView
} from "react-native";
import AppLink from "react-native-app-link";
import AppIds from "../constants/AppIds";
import SocialMediaURLs from "../constants/SocialMediaURLs";
import SocialFeedBase from "../components/base_components/SocialFeedBase";

const WEBVIEW_REF = "webview";

class TwitterFeed extends React.Component {
  _onNavigationStateChange(navEvent) {
    console.log("Twitter nav url: " + navEvent.url);
    if (navEvent.url !== SocialMediaURLs.twitterURL) {
      AppLink.maybeOpenURL("twitter://user?id=752931114054881280", {
        appName: "twitter",
        appStoreId: AppIds.twitterAppStoreId,
        playStoreId: AppIds.twitterPlayStoreId
      })
        .then(() => {
          this.refs[WEBVIEW_REF].stopLoading();
        })
        .catch(err => console.error("An error occurred", err));
    }
  }

  render() {
    return (
      <SocialFeedBase uri = {SocialMediaURLs.twitterURL}/>
    );
  }
}

const styles = StyleSheet.create({
  socialWindow: {
    flex: 1
  },
  button: {
    alignSelf: "stretch"
  }
});

export default TwitterFeed;
