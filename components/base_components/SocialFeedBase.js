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

class SocialFeedBase extends React.Component {

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
          source={{
            uri: this.props.uri
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
    flex: 1,
    width: Layout.width,
    height: Layout.height
  }
});

export default SocialFeedBase;
