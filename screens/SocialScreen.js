import React from "react";
import { ScrollView, StyleSheet, View, WebView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TabViewAnimated, TabBar } from "react-native-tab-view";
import { LinearGradient } from "expo";
import Colors from "../constants/Colors";
import SocialWindow from "../components/SocialWindow";

/*Reference: https://projects.invisionapp.com/share/CEEG2I6JB#/screens/262903247*/
//Constants for scenes to be shown in the tabs
const FacebookRoute = () => (
  <SocialWindow
    uri = "https://www.jpl.nasa.gov/missions/psyche/"
  />
);
const InstagramRoute = () => (
  <View style={[styles.container, { backgroundColor: "white" }]} />
);
const TwitterRoute = () => (
  <View style={[styles.container, { backgroundColor: "black" }]} />
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

  instagramState = {
    loaded: false,
    feedData: null,
    comments: []
  };

  componentDidMount() {
    this.fetchInstagramFeed();
  }


  async fetchInstagramFeed() {
    let response = await fetch (
      'https://www.instagram.com/nasapsyche/?__a=1'
    )

    let posts = await response.json();
    let comments = await this.makeCommentList(posts.feedData);
  }

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
        {/* <WebView
          source = {{uri: 'https://www.jpl.nasa.gov/missions/psyche/'}}
          style = {{marginTop: 20}}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabbar: {
    backgroundColor: "#302144",
    borderTopColor: "black",
    borderTopWidth: 5
  },
  indicator: {
    backgroundColor: "#222"
  }
  // tabGradient: {
  //   height: 50
  // }
});
