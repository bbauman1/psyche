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

class FacebookFeed extends React.Component {
  _onNavigationStateChange(navEvent) {
    if (
      navEvent.url !== SocialMedia.facebookURL &&
      navEvent.url !== "about:blank"
    ) {
      //Navigating away and the app isn't installed on user device
      AppInstalledChecker.isAppInstalled("facebook").then(isInstalled => {
        AppLink.openInStore(
          AppIds.facebookAppStoreId,
          AppIds.facebookPlayStoreId
        ).then(() => {});
      });
      //Otherwise, open fbpage...
      Linking.openURL(appURL);
    }
  }

  render() {
    let url = "";
    return (
      <WebView
        ref={WEBVIEW_REF}
        source={{ uri: SocialMedia.facebookURL }}
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

export default FacebookFeed;
