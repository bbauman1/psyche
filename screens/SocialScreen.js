import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TabViewAnimated, TabBar } from "react-native-tab-view";
import { LinearGradient } from 'expo';
import Colors from "../constants/Colors";

/*Reference: https://projects.invisionapp.com/share/CEEG2I6JB#/screens/262903247*/

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

  _renderHeader = props => {
    return (
      <View style={[styles.container, {paddingTop: 10}]}>
        <TabBar
          {...props}
          indicatorStyle={styles.indicator}
          renderIcon={this._renderIcon}
          style={[styles.tabbar, {position: 'absolute'}]}
        />
      </View>
    );
  };

  _renderIcon = ({ route }) => (
    <Ionicons name={route.icon} size={24} color="white" />
  );

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
      <View
        style={{
          height: 300,
          padding: 10,
          backgroundColor: '#302144'
        }}>
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
    backgroundColor: "#302144",
    borderTopColor: 'black',
    borderTopWidth: 5
  },
  indicator: {
    backgroundColor: "#222"
  },
  tabGradient: {
    height: 50
  }
});
