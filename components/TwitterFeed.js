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

class TwitterFeed extends React.Component {
  _onNavigationStateChange(navEvent) {
    if (
      navEvent.url !== "https://www.facebook.com/NASAPsyche/" &&
      navEvent.url !== "https://www.instagram.com/nasapsyche/?hl=en" &&
      navEvent.url !== "https://twitter.com/nasapsyche?lang=en"
    ) {
      //this.navigationAlert;
      //this.refs[WEBVIEW_REF].stopLoading();
    //   console.log("URL: " + navEvent.url);
      // AppLink.maybeOpenURL(navEvent.url, {
      //   appName: this.state.app,
      //   appStoreId: AppIds.instagramAppStoreId,
      //   playStoreId: AppIds.instagramPlayStoreId
      // }).then(() => {
      //   //do stuff
      // });
      // AppLink.openInStore(AppIds.instagramAppStoreId, AppIds.instagramPlayStoreId).then(() => {
      //   // do stuff
      // })
    }
  }

  render() {
    const initialUrl = this.state.url;
    console.log(this.state.app);
    let url = "";
    return (
      <WebView
        ref={WEBVIEW_REF}
        source={{ uri: SocialMedia.twitterURL }}
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

export default TwitterFeed;
