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

class FacebookFeed extends React.Component {
  _onNavigationStateChange(navEvent) {
    console.log("Facebook Url: " + navEvent.url);
    if (navEvent.url !== SocialMediaURLs.facebookURL) {
      AppLink.maybeOpenURL("fb://profile/1598743977091187", {
        appName: "facebook",
        appStoreId: AppIds.facebookAppStoreId,
        playStoreId: AppIds.facebookPlayStoreId
      })
        .then(() => {
          this.refs[WEBVIEW_REF].stopLoading();
        })
        .catch(err => console.error("An error occurred", err));
    }
  }

  render() {
    return (
      <SocialFeedBase uri = {SocialMediaURLs.facebookURL}/>
    );
  }
}

const styles = StyleSheet.create({
  socialWindow: {
    flex: 1
  }
});

export default FacebookFeed;
