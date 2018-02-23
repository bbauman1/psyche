import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default class TimelineCard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.phaseText}>Phase A</Text>
        <Text style={styles.titleText}>Concept Study</Text>
        <Text style={styles.dateText}>Sept 2015 - Dec 2016</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 260,
    alignSelf: "stretch",
    margin: 20,
    borderRadius: 5,
    backgroundColor: "#302144",
    alignItems: "center",
    justifyContent: "center"
  },
  phaseText: {
    fontSize: 40,
    color: "#FFFFFF"
  },
  titleText: {
    color: "#FFFFFF",
    marginTop: 10,
    fontSize: 26
  },
  dateText: {
    color: "#FFFFFF",
    marginTop: 10,
    fontSize: 18
  }
});
