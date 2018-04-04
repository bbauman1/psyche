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
      console.log("URL: " + navEvent.url);
      Linking.canOpenURL("instagram://app")
        .then(supported => {
          if (!supported) {
            AppLink.openInStore(
              AppIds.instagramAppStoreId,
              AppIds.instagramPlayStoreId
            ).then(() => {
              this.refs[WEBVIEW_REF].stopLoading();
            });
          } else {
            Linking.openURL("instagram://user?username=nasapsyche").catch(() => null);
            this.refs[WEBVIEW_REF].stopLoading();
          }
        })
        .catch(err => console.error("An error occurred", err));
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
