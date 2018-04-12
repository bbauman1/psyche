import { Notifications } from "expo";
import React from "react";
import { StackNavigator } from "react-navigation";
import { Platform } from "react-native";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";

import MainTabNavigator from "./MainTabNavigator";
import CameraScreen from "../screens/CameraScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import Colors from "../constants/Colors.js";

const RootStackNavigator = StackNavigator(
  {
    Main: {
      screen: MainTabNavigator
    },
    Modal: {
      screen: CameraScreen
    },
    Onboarding: {
      screen: OnboardingScreen
    }
  },
  {
    initialRouteName: "Main",
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
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: Colors.primaryColor,
        borderBottomColor: "transparent"
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
  },
  {
    mode: "modal"
  }
);

export default class RootNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onboardingDone: null
    };
  }

  render() {
    return (
      <ActionSheetProvider>
        <RootStackNavigator />
      </ActionSheetProvider>
    );
  }
}
