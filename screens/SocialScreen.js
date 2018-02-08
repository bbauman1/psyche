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
      <View style={styles.container}>
        <LinearGradient
          colors={['#7F7F7F', '#C0C0C0']}>
          style={styles.gradient}
          >
            <TabBar
              {...props}
              indicatorStyle={styles.indicator}
              renderIcon={this._renderIcon}
              style={styles.tabbar}
            />        
        </LinearGradient>
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
    backgroundColor: "#302144",
    borderTopColor: 'black',
    borderTopWidth: 5
  },
  indicator: {
    backgroundColor: "#222"
  },
  gradient: {
    flex: 1
  }
});
