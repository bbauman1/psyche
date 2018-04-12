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
            return (
              <Image
                source={require("../assets/images/fact.png")}
                style={{ height: 28, width: 28, resizeMode: "contain" }}
              />
            );
            break;
          case "Timeline":
            return (
              <Image
                source={require("../assets/images/timeline.png")}
                style={{ height: 28, width: 28, resizeMode: "contain" }}
              />
            );
            break;
          case "Home":
            let homeStyle =
              Platform.OS === "ios"
                ? { height: 48, width: 48, marginBottom: 10 }
                : { height: 32, width: 32, marginBottom: -1 };
            return (
              <Image
                source={require("../assets/images/psyche-icon.png")}
                style={homeStyle}
              />
            );
            break;
          case "Social":
            return (
              <Image
                source={require("../assets/images/social.png")}
                style={{ height: 28, width: 28, resizeMode: "contain" }}
              />
            );
            break;
          case "Gallery":
            return (
              <Image
                source={require("../assets/images/gallery.png")}
                style={{ height: 28, width: 28, resizeMode: "contain" }}
              />
            );
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
        backgroundColor: "#fff"
      },
      labelStyle: {
        ...Platform.select({
          ios: {
            fontFamily: "Helvetica"
          },
          android: {
            fontFamily: "sans-serif"
          }
        })
      },
      activeTintColor: Colors.primaryColor
    }
  }
);
