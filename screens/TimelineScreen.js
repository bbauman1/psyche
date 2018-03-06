import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  TouchableWithoutFeedback
} from "react-native";
import TimelineCard from "../components/TimelineCard.js";
import { LinearGradient } from "expo";

export default class TimelineScreen extends React.Component {
  constructor() {
    super();
  }

  static navigationOptions = {
    title: "Timeline"
  };

  render() {
    return (
      <View style={styles.parent}>
        <ScrollView contentContainerStyle={styles.container}>
          <TouchableWithoutFeedback
            onPress={() => {
              console.log("Fire Tap");
            }}
          >
            <View style={styles.card}>
              <LinearGradient
                colors={["#4c669f", "#3b5998", "#192f6a"]}
                style={styles.gradient}
              >
                <Text style={styles.phaseText}>Phase A</Text>
                <Text style={styles.titleText}>Concept Study</Text>
                <Text style={styles.dateText}>Sept 2015 - Dec 2016</Text>
              </LinearGradient>
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.card}>
            <LinearGradient
              colors={["#4c669f", "#3b5998", "#192f6a"]}
              style={styles.gradient}
            >
              <Text style={styles.phaseText}>Phase B</Text>
              <Text style={styles.titleText}>Concept Study</Text>
              <Text style={styles.dateText}>Sept 2015 - Dec 2016</Text>
            </LinearGradient>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  parent: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  gradient: {
    height: 260,
    width: "90%",
    margin: 20,
    borderRadius: 5,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    backgroundColor: "transparent",
    height: 280,
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
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
