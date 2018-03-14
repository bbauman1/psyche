import { Notifications } from "expo";
import React from "react";
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { StackNavigator } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import CameraScreen from "../screens/CameraScreen";

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
    mode: "modal",
    animationType: 'none',
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: "normal"
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
