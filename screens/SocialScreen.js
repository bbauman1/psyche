import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  WebView,
  Dimensions
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TabViewAnimated, TabBar } from "react-native-tab-view";
import { LinearGradient } from "expo";
import Colors from "../constants/Colors";
import SocialWindow from "../components/SocialWindow";
import InstagramWindow from "../components/InstagramWindow";

/*Reference: https://projects.invisionapp.com/share/CEEG2I6JB#/screens/262903247*/
const FacebookRoute = () => (
  <SocialWindow uri="https://www.facebook.com/NASAPsyche/" />
);
const InstagramRoute = () => (
  <SocialWindow uri="https://www.instagram.com/nasapsyche/?hl=en" />
);
const TwitterRoute = () => (
  <SocialWindow uri="https://twitter.com/nasapsyche?lang=en" />
);

export default class SocialScreen extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "first", icon: "logo-facebook" },
      { key: "second", icon: "logo-instagram" },
      { key: "third", icon: "logo-twitter" }
    ]
  };

  static navigationOptions = {
    title: "Social Media"
  };

  _handleIndexChange = index => this.setState({ index });

  _renderIcon = ({ route }) => (
    <Ionicons name={route.icon} size={24} color="white" />
  );

  _renderScene = ({ route }) => {
    switch (route.key) {
      case "first":
        //Render the SocialWindow component with Psyche facebook showing
        return <FacebookRoute />;
      case "second":
        //Render the SocialWindow component with Psyche Instagram showing
        return <InstagramRoute />;
      case "third":
        //Render the SocialWindow component with Psyche Twitter showing
        return <TwitterRoute />;
      default:
        return null;
    }
  };

  _renderHeader = props => {
    return (
      <TabBar
        {...props}
        indicatorStyle={styles.indicator}
        renderIcon={this._renderIcon}
        style={[styles.tabbar]}
      />
    );
  };

  render() {
    return (
      <View
        style={{
          height: "100%",
          backgroundColor: "#302144"
        }}
      >
        <TabViewAnimated
          style={[styles.container, this.props.style]}
          navigationState={this.state}
          renderScene={this._renderScene}
          renderHeader={this._renderHeader}
          onIndexChange={this._handleIndexChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  indicator: {
    backgroundColor: "#222"
  }
});
