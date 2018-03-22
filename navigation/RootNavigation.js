import { Notifications } from "expo";
import React from "react";
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { StackNavigator } from "react-navigation";

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
      }
    })
  }
);

export default class RootNavigator extends React.Component {
  render() {
    return <ActionSheetProvider>
      <RootStackNavigator />
    </ActionSheetProvider>;
  }
}
