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
        <LinearGradient
          colors={['#7F7F7F', '#C0C0C0']}
          start={[0.1,0.0]}
          end = {[0.9,0.0]}
          style={{height: 50, width: 200, alignItems: 'center', justifyContent: 'center'}}>
          <View style={[styles.container, {borderWidth: 10, width: '100%'}]}>
            <TabBar
              {...props}
              indicatorStyle={styles.indicator}
              renderIcon={this._renderIcon}
              style={[styles.tabbar, {position: 'absolute'}]}
            />
          </View>
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
  tabGradient: {
    height: 50
  }
});
