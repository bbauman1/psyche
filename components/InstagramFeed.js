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
import SocialMedia from "../constants/SocialMedia";
import SocialWindow from "../components/SocialWindow";
import { AppInstalledChecker, CheckPackageInstallation } from 'react-native-check-app-install';

const WEBVIEW_REF = "webview";

class InstagramFeed extends React.Component {
  _onNavigationStateChange(navEvent) {
    if (
      navEvent.url !== "https://www.instagram.com/nasapsyche/?hl=en" &&
      navEvent.url !== "about:blank"
    ) {
      //this.navigationAlert;
      //this.refs[WEBVIEW_REF].stopLoading();
      console.log("URL: " + navEvent.url);
      AppLink.maybeOpenURL(navEvent.url, {
        appName: "instagram",
        appStoreId: AppIds.instagramAppStoreId,
        playStoreId: AppIds.instagramPlayStoreId
      }).then(() => {
        //do stuff
        Alert("Alert thrown");
      });
      // AppLink.openInStore(AppIds.instagramAppStoreId, AppIds.instagramPlayStoreId).then(() => {
      //   // do stuff
      // })
    }
  }

  render() {
    let url = "";
    return (
      <WebView
        ref={WEBVIEW_REF}
        source={{ uri: SocialMedia.instagramURL }}
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
    marginTop: 20
  }
});

export default InstagramFeed;
