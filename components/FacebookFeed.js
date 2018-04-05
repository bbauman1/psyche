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

class FacebookFeed extends React.Component {
  _onNavigationStateChange(navEvent) {
    if (navEvent.url !== SocialMediaURLs.facebookURL) {
      Linking.canOpenURL("fb://app")
        .then(supported => {
          if (!supported) {
            AppLink.openInStore(
              AppIds.facebookAppStoreId,
              AppIds.facebookPlayStoreId
            ).then(() => {});
          } else {
            this.refs[WEBVIEW_REF].stopLoading();
            Linking.openURL("fb://page/1598743977091187").catch(() => null);
          }
        })
        .catch(err => console.error("An error occurred", err));
    }
  }

  render() {
    return (
      <WebView
        ref={WEBVIEW_REF}
        source={{ uri: SocialMediaURLs.facebookURL }}
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
