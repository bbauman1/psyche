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
import {
  AppInstalledChecker,
  CheckPackageInstallation
} from "react-native-check-app-install";

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
    return (
      <WebView
        ref={WEBVIEW_REF}
        source={{ uri: SocialMediaURLs.instagramURL }}
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
