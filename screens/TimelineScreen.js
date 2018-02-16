import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import TimelineCard from "../components/TimelineCard.js";

export default class TimelineScreen extends React.Component {
  constructor() {
    super();
  }

  static navigationOptions = {
    title: "Timeline"
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container} centerContent={true}>
        <TimelineCard />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  }
});
