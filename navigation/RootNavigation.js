import { Notifications } from "expo";
import React from "react";
import { StackNavigator } from "react-navigation";
import { Platform } from "react-native";

import MainTabNavigator from "./MainTabNavigator";
import CameraScreen from "../screens/CameraScreen";
import Colors from "../constants/Colors.js"

const RootStackNavigator = StackNavigator(
  {
    Main: {
      screen: MainTabNavigator
    },
    Modal: {
      screen: CameraScreen
    }
  },
  {
    initialRouteName: 'Main',
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: "normal",
        ...Platform.select({
          ios: {
            fontFamily: "Helvetica"
          },
          android: {
            fontFamily: "sans-serif"
          }
        })
      },
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: Colors.primaryColor,
        borderBottomColor: 'transparent',
      }
    })
  },
  {
    mode: "modal",
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: "normal",
        ...Platform.select({
          ios: {
            fontFamily: "Helvetica"
          },
          android: {
            fontFamily: "sans-serif"
          }
        })
      }
    })
  }
);

export default class RootNavigator extends React.Component {
  render() {
    return <RootStackNavigator />
  }
}
