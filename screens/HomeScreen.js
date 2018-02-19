import React from "react";
import { ScrollView, StyleSheet, Button } from "react-native";
import { StackNavigator } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Countdown",
      headerLeft: (
        <Ionicons
          name={"ios-camera-outline"}
          size={32}
          color={"#000"}
          style={{ marginLeft: 18 }}
          onPress={() => navigation.navigate("Modal")}
        />
      )
    };
  };

  render() {
    return <ScrollView style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
