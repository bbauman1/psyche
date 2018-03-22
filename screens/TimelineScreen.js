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
import Colors from "../constants/Colors.js";


// Import timeline string data stored as JSON
var PHASES = require("../timeline_json/PHASES.json");

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
            onPress={() =>
              this.props.navigation.navigate("Details", {
                phase: PHASES.PHASE_A
              })
            }
          >
            {/* PHASE A CARD */}
            <View style={styles.card}>
              <LinearGradient
                colors={["#4c669f", "#3b5998", "#192f6a"]}
                style={styles.gradient}
              >
                <Text style={styles.phaseText}>{PHASES.PHASE_A.phase}</Text>
                <Text style={styles.titleText}>{PHASES.PHASE_A.title}</Text>
                <Text style={styles.dateText}>{PHASES.PHASE_A.date}</Text>
              </LinearGradient>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() =>
              this.props.navigation.navigate("Details", {
                phase: PHASES.PHASE_B
              })
            }
          >
            {/* PHASE B CARD */}
            <View style={styles.card}>
              <LinearGradient
                colors={["#4c669f", "#3b5998", "#192f6a"]}
                style={styles.gradient}
              >
                <Text style={styles.phaseText}>{PHASES.PHASE_B.phase}</Text>
                <Text style={styles.titleText}>{PHASES.PHASE_B.title}</Text>
                <Text style={styles.dateText}>{PHASES.PHASE_B.date}</Text>
              </LinearGradient>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() =>
              this.props.navigation.navigate("Details", {
                phase: PHASES.PHASE_C
              })
            }
          >
            {/* PHASE C CARD */}
            <View style={styles.card}>
              <LinearGradient
                colors={["#4c669f", "#3b5998", "#192f6a"]}
                style={styles.gradient}
              >
                <Text style={styles.phaseText}>{PHASES.PHASE_C.phase}</Text>
                <Text style={styles.titleText}>{PHASES.PHASE_C.title}</Text>
                <Text style={styles.dateText}>{PHASES.PHASE_C.date}</Text>
              </LinearGradient>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() =>
              this.props.navigation.navigate("Details", {
                phase: PHASES.PHASE_D
              })
            }
          >
            {/* PHASE D CARD */}
            <View style={styles.card}>
              <LinearGradient
                colors={["#4c669f", "#3b5998", "#192f6a"]}
                style={styles.gradient}
              >
                <Text style={styles.phaseText}>{PHASES.PHASE_D.phase}</Text>
                <Text style={styles.titleText}>{PHASES.PHASE_D.title}</Text>
                <Text style={styles.dateText}>{PHASES.PHASE_D.date}</Text>
              </LinearGradient>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() =>
              this.props.navigation.navigate("Details", {
                phase: PHASES.PHASE_E
              })
            }
          >
            {/* PHASE E CARD */}
            <View style={styles.card}>
              <LinearGradient
                colors={["#4c669f", "#3b5998", "#192f6a"]}
                style={styles.gradient}
              >
                <Text style={styles.phaseText}>{PHASES.PHASE_E.phase}</Text>
                <Text style={styles.titleText}>{PHASES.PHASE_E.title}</Text>
                <Text style={styles.dateText}>{PHASES.PHASE_E.date}</Text>
              </LinearGradient>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() =>
              this.props.navigation.navigate("Details", {
                phase: PHASES.PHASE_F
              })
            }
          >
            {/* PHASE F CARD */}
            <View style={styles.card}>
              <LinearGradient
                colors={["#4c669f", "#3b5998", "#192f6a"]}
                style={styles.gradient}
              >
                <Text style={styles.phaseText}>{PHASES.PHASE_F.phase}</Text>
                <Text style={styles.titleText}>{PHASES.PHASE_F.title}</Text>
                <Text style={styles.dateText}>{PHASES.PHASE_F.date}</Text>
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
    /* Read the params from the navigation state */
    const { params } = this.props.navigation.state;
    const phase_prop = params ? params.phase : null;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ScrollView>
          {phase_prop.checkpoints.map((checkpoint, i) => (
            <View key={i}>
              <Text key={i + 1}>{checkpoint.title}</Text>
              <Text key={i + 2}>{checkpoint.date}</Text>
              {checkpoint.bullets.map((bullet, k) => (
                <Text key={k}>{bullet}</Text>
              ))}
            </View>
          ))}
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
        fontWeight: "normal",
      },
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: Colors.primaryColor,
        borderBottomColor: 'transparent',
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
