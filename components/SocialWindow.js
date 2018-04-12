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
import { Ionicons } from "@expo/vector-icons";

const WEBVIEW_REF = "webview";

class SocialWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { canGoBack: false };
  }
  render() {
    return (
      <View style={[styles.socialWindow]}>
        {this.state.canGoBack && (
          <View style={[styles.backButtonTopBar]}>
            <TouchableOpacity onPress={this.onGoBack.bind(this)}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="md-arrow-back" size={24} color="white" />
                <Text style={[styles.backText]}> Back</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
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
    height: 35,
    justifyContent: "center",
    alignSelf: "flex-start",
    paddingLeft: 15
  },
  backText: {
    color: "white",
    paddingLeft: 5,
    paddingBottom: 2,
    fontWeight: "bold",
  }
});

export default SocialWindow;
