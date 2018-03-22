import React from "react";
import { Platform, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TabNavigator, TabBarBottom } from "react-navigation";

import Colors from "../constants/Colors";

import HomeScreen from "../screens/HomeScreen";
import SocialScreen from "../screens/SocialScreen";
import GalleryScreen from "../screens/GalleryScreen";
import TimelineScreen from "../screens/TimelineScreen";
import FactsScreen from "../screens/FactsScreen";

export default TabNavigator(
  {
    Facts: {
      screen: FactsScreen
    },
    Timeline: {
      screen: TimelineScreen
    },
    Home: {
      screen: HomeScreen
    },
    Social: {
      screen: SocialScreen
    },
    Gallery: {
      screen: GalleryScreen
    }
  },
  {
    initialRouteName: "Home",
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case "Facts":
            iconName =
              Platform.OS === "ios"
                ? `ios-information-circle${focused ? "" : "-outline"}`
                : "md-information-circle";
            break;
          case "Timeline":
            iconName =
              Platform.OS === "ios"
                ? `ios-time${focused ? "" : "-outline"}`
                : "md-time";
            break;
          case "Home":
            return (
              <Image source={require("../assets/images/psyche-icon.png")} style={{ height: 32, width: 32 }} />

            );
            break;
          // iconName =
          //   Platform.OS === "ios"
          //     ? `ios-home${focused ? "" : "-outline"}`
          //     : "md-home";
          // break;
          case "Social":
            iconName =
              Platform.OS === "ios"
                ? `ios-chatbubbles${focused ? "" : "-outline"}`
                : "md-chatbubbles";
            break;
          case "Gallery":
            iconName =
              Platform.OS === "ios"
                ? `ios-images${focused ? "" : "-outline"}`
                : "md-images";
            break;
        }
        return (
          <Ionicons
            name={iconName}
            size={32}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.primaryColor : Colors.tabIconDefault}
          />
        );
      }
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: "bottom",
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      style: {
        backgroundColor: "#fff",
      },
      activeTintColor: Colors.primaryColor,
    }
  }
);
