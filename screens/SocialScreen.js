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
import FacebookFeed from "../components/FacebookFeed";
import InstagramFeed from "../components/InstagramFeed";
import TwitterFeed from "../components/TwitterFeed";

const FacebookRoute = () => <FacebookFeed />;
const InstagramRoute = () => <InstagramFeed />;
const TwitterRoute = () => <TwitterFeed />;

export default class SocialScreen extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "first", icon: "logo-twitter" },
      { key: "second", icon: "logo-instagram" },
      { key: "third", icon: "logo-facebook" }
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
        return <TwitterRoute />;
      case "second":
        return <InstagramRoute />;
      case "third":
        return <FacebookRoute />;
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
  tabbar: {
    backgroundColor: Colors.primaryColor
  },
  indicator: {
    backgroundColor: "#fff"
  }
});
