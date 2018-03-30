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
import {
  AppInstalledChecker,
  CheckPackageInstallation
} from "react-native-check-app-install";

const WEBVIEW_REF = "webview";

class InstagramFeed extends React.Component {
  _onNavigationStateChange(navEvent) {
    if (
      navEvent.url !== SocialMedia.instagramURL &&
      navEvent.url !== "about:blank"
    ) {
      //this.navigationAlert;
      //this.refs[WEBVIEW_REF].stopLoading();
      console.log("URL: " + navEvent.url);
      //Navigating away and the app isn't installed on user device
      AppInstalledChecker.isAppInstalled("instagram").then(isInstalled => {
        if (!isInstalled) {
          //Open apple or playstore
          AppLink.openInStore(
            AppIds.instagramAppStoreId,
            AppIds.instagramPlayStoreId
          ).then(() => {});
        } else {
          //Open the URL in the app if installed.
          //Otherwise,
          Linking.openURL(appURL);
        }
      });
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
