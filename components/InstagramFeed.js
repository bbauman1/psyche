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
import SocialFeedBase from "../components/base_components/SocialFeedBase";

const WEBVIEW_REF = "webview";

class InstagramFeed extends React.Component {
  _onNavigationStateChange(navEvent) {
    console.log("Instagram Url: " + navEvent.url);
    if (navEvent.url !== SocialMediaURLs.instagramURL) {
      AppLink.maybeOpenURL("instagram://user?username=nasapsyche", {
        appName: "instagram",
        appStoreId: AppIds.instagramAppStoreId,
        playStoreId: AppIds.instagramPlayStoreId
      })
        .then(() => {
          this.refs[WEBVIEW_REF].stopLoading();
        })
        .catch(err => console.error("An error occurred", err));
    }
  }

  render() {
    return <SocialFeedBase uri={SocialMediaURLs.instagramURL} />;
  }
}

const styles = StyleSheet.create({
  socialWindow: {
    flex: 1
  }
});

export default InstagramFeed;
