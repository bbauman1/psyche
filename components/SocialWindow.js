import React from "react";
import { StyleSheet, View, Text, WebView, Dimensions } from "react-native";
import Layout from "../constants/Layout";

class SocialWindow extends React.Component {
  _onNavigationStateChange(webViewState) {
    console.log(webViewState.url);
  }

  render() {
    return (
      <WebView
        source={{ uri: this.props.uri }}
        style={[styles.socialWindow]}
        onNavigationStateChange={this._onNavigationStateChange.bind(this)}
      />
    );
  }
}

const styles = StyleSheet.create({
  socialWindow: {
    flex: 1,
    width: Layout.width,
    height: Layout.height
  }
});

export default SocialWindow;
