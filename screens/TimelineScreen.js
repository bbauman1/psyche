import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  TouchableWithoutFeedback
} from "react-native";
import { LinearGradient } from "expo";
import { StackNavigator } from "react-navigation";

// Import timeline string data stored as JSON
var PHASE_A = require("../timeline_json/PHASE_A.json");
var PHASE_B = require("../timeline_json/PHASE_B.json");
var PHASE_C = require("../timeline_json/PHASE_C.json");
var PHASE_D = require("../timeline_json/PHASE_D.json");
var PHASE_E = require("../timeline_json/PHASE_E.json");
var PHASE_F = require("../timeline_json/PHASE_F.json");

class Timeline extends React.Component {
  static navigationOptions = {
    title: "Timeline"
  };
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.parent}>
        <ScrollView contentContainerStyle={styles.container}>
          <TouchableWithoutFeedback
            onPress={() => this.props.navigation.navigate("Details")}
          >
            {/* PHASE A CARD */}
            <View style={styles.card}>
              <LinearGradient
                colors={["#4c669f", "#3b5998", "#192f6a"]}
                style={styles.gradient}
              >
                <Text style={styles.phaseText}>{PHASE_A.phase}</Text>
                <Text style={styles.titleText}>{PHASE_A.title}</Text>
                <Text style={styles.dateText}>{PHASE_A.date}</Text>
              </LinearGradient>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => this.props.navigation.navigate("Details")}
          >
            {/* PHASE B CARD */}
            <View style={styles.card}>
              <LinearGradient
                colors={["#4c669f", "#3b5998", "#192f6a"]}
                style={styles.gradient}
              >
                <Text style={styles.phaseText}>{PHASE_B.phase}</Text>
                <Text style={styles.titleText}>{PHASE_B.title}</Text>
                <Text style={styles.dateText}>{PHASE_B.date}</Text>
              </LinearGradient>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => this.props.navigation.navigate("Details")}
          >
            {/* PHASE C CARD */}
            <View style={styles.card}>
              <LinearGradient
                colors={["#4c669f", "#3b5998", "#192f6a"]}
                style={styles.gradient}
              >
                <Text style={styles.phaseText}>{PHASE_C.phase}</Text>
                <Text style={styles.titleText}>{PHASE_C.title}</Text>
                <Text style={styles.dateText}>{PHASE_C.date}</Text>
              </LinearGradient>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => this.props.navigation.navigate("Details")}
          >
            {/* PHASE D CARD */}
            <View style={styles.card}>
              <LinearGradient
                colors={["#4c669f", "#3b5998", "#192f6a"]}
                style={styles.gradient}
              >
                <Text style={styles.phaseText}>{PHASE_D.phase}</Text>
                <Text style={styles.titleText}>{PHASE_D.title}</Text>
                <Text style={styles.dateText}>{PHASE_D.date}</Text>
              </LinearGradient>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => this.props.navigation.navigate("Details")}
          >
            {/* PHASE E CARD */}
            <View style={styles.card}>
              <LinearGradient
                colors={["#4c669f", "#3b5998", "#192f6a"]}
                style={styles.gradient}
              >
                <Text style={styles.phaseText}>{PHASE_E.phase}</Text>
                <Text style={styles.titleText}>{PHASE_E.title}</Text>
                <Text style={styles.dateText}>{PHASE_E.date}</Text>
              </LinearGradient>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => this.props.navigation.navigate("Details")}
          >
            {/* PHASE F CARD */}
            <View style={styles.card}>
              <LinearGradient
                colors={["#4c669f", "#3b5998", "#192f6a"]}
                style={styles.gradient}
              >
                <Text style={styles.phaseText}>{PHASE_F.phase}</Text>
                <Text style={styles.titleText}>{PHASE_F.title}</Text>
                <Text style={styles.dateText}>{PHASE_F.date}</Text>
              </LinearGradient>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = {};

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ScrollView />
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
    fontSize: 18
  },
  dateText: {
    color: "#FFFFFF",
    marginTop: 10,
    fontSize: 18
  }
});

const RootStack = StackNavigator(
  {
    Timeline: {
      screen: Timeline
    },
    Details: {
      screen: DetailsScreen
    }
  },
  {
    mode: "modal",
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: "normal"
      }
    })
  }
);

export default class TimelineScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return <RootStack />;
  }
}
