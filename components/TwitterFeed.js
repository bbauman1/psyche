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

  onPress = () => {
    console.log("Button Pressed");
  };

  // render() {
  //   return (
  //     <View style={styles.socialWindow}>
  //     <ScrollView>
  //         <WebView
  //           ref={WEBVIEW_REF}
  //           source={{ uri: SocialMediaURLs.twitterURL }}
  //           // style = {[styles.socialWindow]}
  //           style={{height: Dimensions.get("window").height * 10}}
  //           //onNavigationStateChange={this._onNavigationStateChange.bind(this)}
  //           startInLoadingState={true}
  //         />
  //     </ScrollView>
  //     </View>
  //   );
  // }

  state = {
    enablePullToRefresh: true
  };

  render() {
    return (
      <ScrollView
        onLayout={event =>
          this.setState({ scrollViewHeight: event.nativeEvent.layout.height })
        }
      >
        <WebView
          style={{
            width: Dimensions.get("window").width,
            height: this.state.scrollViewHeight
          }}
          enableNavigate={false}
          source={{
            uri: SocialMediaURLs.twitterURL
          }}
          ref={r => (this.webview = r)}
          {...this.props}
          injectedJavaScript="window.onscroll = function() { window.postMessage(document.documentElement.scrollTop||document.body.scrollTop)}"
          onMessage={this.onMessage.bind(this)}
        />
      </ScrollView>
    );
  }

  onMessage(event) {
    //document.documentElement.scrollTop||document.body.scrollTop returns the distance between scroll bar and top position
    this.setState({
      enablePullToRefresh: event.nativeEvent.data == 0
    });
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
