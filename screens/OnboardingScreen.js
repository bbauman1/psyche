import React from "react";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationActions } from "react-navigation";
import Onboarding from "react-native-onboarding-swiper";

export default class OnboardingScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Onboarding
        onDone={() => this.props.navigation.goBack()}
        showSkip={false}
        pages={[
          {
            backgroundColor: "#f06359",
            image: (
              <Image
                style={{
                  resizeMode: "contain",
                  alignSelf: "center",
                  height: 120,
                  width: 120
                }}
                source={require("../assets/images/psyche-icon-white.png")}
              />
            ),
            title: "Meet Psyche",
            subtitle:
              "Psyche is the name of an astroid in out solar system and the name of the psyche mission to take us there."
          },
          {
            backgroundColor: "#a4405c",
            image: (
              <Image
                style={{
                  resizeMode: "contain",
                  alignSelf: "center",
                  height: 120,
                  width: 120
                }}
                source={require("../assets/images/timeline-white.png")}
              />
            ),
            title: "Countdown With Us",
            subtitle:
              "The mission is set to takeoff in 2022 and we are counting all the big milestones of the mission."
          },
          {
            backgroundColor: "#7e3255",
            image: (
              <Image
                style={{
                  resizeMode: "contain",
                  alignSelf: "center",
                  height: 120,
                  width: 120
                }}
                source={require("../assets/images/fact-white.png")}
              />
            ),
            title: "Learn And Stay Informed",
            subtitle:
              "This app will teach you everything you need to know about the Psyche mission through facts, social media and timeline."
          },
          {
            backgroundColor: "#342248",
            image: (
              <Image
                style={{
                  resizeMode: "contain",
                  alignSelf: "center",
                  height: 120,
                  width: 120
                }}
                source={require("../assets/images/photo-album-white.png")}
              />
            ),
            title: "Picture This",
            subtitle:
              "Apply exclusive Psyche filters to your favorite images and share them with your friends."
          }
        ]}
      />
    );
  }
}
