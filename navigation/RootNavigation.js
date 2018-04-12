import { Notifications } from "expo";
import React from "react";
import { StackNavigator } from "react-navigation";
import { Platform, Image, AsyncStorage, View } from "react-native";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import Onboarding from "react-native-onboarding-swiper";
import { Ionicons } from "@expo/vector-icons";

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
      },
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: Colors.primaryColor,
        borderBottomColor: "transparent"
      }
    })
  }
);

export default class RootNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onboardingDone: null
    };
  }

  componentDidMount() {
    AsyncStorage.getItem("@Pysche:firstLaunch9").then(value => {
      if (value === null) {
        AsyncStorage.setItem("@Pysche:firstLaunch9", "true");
        this.setState({ onboardingDone: false });
      }
      else {
        this.setState({ onboardingDone: true });
      }
    });
  };

  render() {

    return (
      <ActionSheetProvider>
        <RootStackNavigator />
      </ActionSheetProvider>
    );

  }
}
