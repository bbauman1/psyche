import React from "react";
import {
  StyleSheet,
  View,
  Text,
  WebView,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Layout from "../constants/Layout";

const WEBVIEW_REF = "webview";

class SocialWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { canGoBack: false };
  }
  render() {
    return (
      <View style={[styles.socialWindow]}>
        <View style={[styles.backButtonTopBar]}>
          <TouchableOpacity
            disabled={!this.state.canGoBack}
            onPress={this.onGoBack.bind(this)}
          >
            <Text>Go Back </Text>
          </TouchableOpacity>
        </View>
        <WebView
          ref={WEBVIEW_REF}
          source={{ uri: this.props.uri }}
          style={[styles.socialWindow]}
          onNavigationStateChange={this._onNavigationStateChange.bind(this)}
          startInLoadingState={true}
        />
      </View>
    );
  }

  _onNavigationStateChange(webViewState) {
    this.setState({
      canGoBack: webViewState.canGoBack
    });
  }
  onGoBack() {
    this.refs[WEBVIEW_REF].goBack();
  }
}

const styles = StyleSheet.create({
  socialWindow: {
    flex: 1,
    width: Layout.width,
    height: Layout.height
  },
  backButtonTopBar: {
    height: 30,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default SocialWindow;
