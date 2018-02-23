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
      <View style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={styles.container}
          centerContent={true}
        >
          <TimelineCard />
          <TimelineCard />
          <TimelineCard />
          <TimelineCard />
          <TimelineCard />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  }
});
