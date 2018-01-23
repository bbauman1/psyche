import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { TabViewAnimated, TabBar, SceneMap } from "react-native-tab-view";
import Colors from "../constants/Colors";

export default class FactsScreen extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "first", title: "Mission" },
      { key: "second", title: "Spacecraft" },
      { key: "third", title: "Asteroid" }
    ]
  };

  static navigationOptions = {
    title: "Facts"
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => {
    return (
      <TabBar
        {...props}
        indicatorStyle={styles.indicator}
        style={styles.tabbar}
      />
    );
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
      case "first":
        return <View />;
      case "second":
        return <View />;
      case "third":
        return <View />;
      default:
        return null;
    }
  };

  render() {
    return (
      <TabViewAnimated
        style={[styles.container, this.props.style]}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabbar: {
    backgroundColor: "#000"
  },
  indicator: {
    backgroundColor: "#222"
  }
});
