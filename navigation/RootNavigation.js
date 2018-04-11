import { Notifications } from "expo";
import React from "react";
import { StackNavigator } from "react-navigation";
import { Platform, Image, AsyncStorage, View } from "react-native";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import Onboarding from "react-native-onboarding-swiper";

import MainTabNavigator from "./MainTabNavigator";
import CameraScreen from "../screens/CameraScreen";
import Colors from "../constants/Colors.js";

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
  }
);

export default class RootNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onboardingDone: null
    };
  }
  _onboardingCallback = async () => {
    try {
      await AsyncStorage.setItem("@Pysche:Onboarding:Done", "done");
      this.setState({ onboardingDone: true });
    } catch (error) {
      console.log(error);
    }
  };

  _checkOnboarding = async () => {
    try {
      // returns null if item not found
      let done = await AsyncStorage.getItem("@Pysche:Onboarding:Done");
      if (done !== null) {
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      return true;
    }
  };

  componentDidMount = async () => {
    // checks to show onBoarding screen
    let onboardingDone = await this._checkOnboarding();
    this.setState({ onboardingDone: onboardingDone });
  };

  render() {
    // mount view to call async function to determine
    // to show onBoarding or not
    if (this.state.onboardingDone === null) {
      return <View />;
    }
    if (!this.state.onboardingDone) {
      return (
        <Onboarding
          onDone={this._onboardingCallback}
          showSkip={false}
          pages={[
            {
              backgroundColor: "#f06359",
              image: (
                <Image source={require("../assets/images/meet-psyche.png")} />
              ),
              title: "Meet Psyche",
              subtitle:
                "Psyche is the name of an astroid in out solar system and the name of the psyche mission to take us there."
            },
            {
              backgroundColor: "#a4405c",
              image: (
                <Image source={require("../assets/images/countdown.png")} />
              ),
              title: "Learn And Stay Informed",
              subtitle:
                "The mission is set to takeoff in 2022 and we are counting all the big milestones of the mission."
            },
            {
              backgroundColor: "#7e3255",
              image: (
                <Image source={require("../assets/images/stayinformed.png")} />
              ),
              title: "Countdown With Us",
              subtitle:
                "The Psyche app will teach you everything you need to know about the mission, the astroid, and the spacecraft through facts, a timeline and social media."
            },
            {
              backgroundColor: "#342248",
              image: <Image source={require("../assets/images/camera.png")} />,
              title: "Picture This",
              subtitle:
                "Apply exclusive Psyche filters to your favorite images and share them with your friends."
            }
          ]}
        />
      );
    }
    return (
      <ActionSheetProvider>
        <RootStackNavigator />
      </ActionSheetProvider>
    );
  }
}
