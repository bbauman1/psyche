import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Button,
  TouchableWithoutFeedback
} from "react-native";
import { LinearGradient } from "expo";
import { StackNavigator } from "react-navigation";
import Colors from "../constants/Colors.js";
import { Entypo } from "@expo/vector-icons";
import { PsycheText } from "../components/StyledText";
import { Radar } from "../components/Radar";

// Import timeline string data stored as JSON
var PHASES = require("../timeline_json/PHASES.json");
var COLORS = require("../constants/Colors.js");

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
              <PsycheText style={styles.dateText}>
                {PHASES.PHASE_A.date}
              </PsycheText>
              <View style={styles.circle} />
              <PsycheText style={styles.titleText}>
                {PHASES.PHASE_A.title}
              </PsycheText>
              <Entypo
                style={styles.chevron}
                name="chevron-small-right"
                size={32}
                color="#FFFFFF"
              />
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
              <PsycheText style={styles.dateText}>
                {PHASES.PHASE_B.date}
              </PsycheText>
              <View style={styles.circle} />
              <PsycheText style={styles.titleText}>
                {PHASES.PHASE_B.title}
              </PsycheText>
              <Radar style={styles.circle} />
              <Entypo
                style={styles.chevron}
                name="chevron-small-right"
                size={32}
                color="#FFFFFF"
              />
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
              <PsycheText style={styles.dateText}>
                {PHASES.PHASE_C.date}
              </PsycheText>
              <View style={styles.circle} />
              <PsycheText style={styles.titleText}>
                {PHASES.PHASE_C.title}
              </PsycheText>
              <Entypo
                style={styles.chevron}
                name="chevron-small-right"
                size={32}
                color="#FFFFFF"
              />
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
              <PsycheText style={styles.dateText}>
                {PHASES.PHASE_D.date}
              </PsycheText>
              <View style={styles.circle} />
              <PsycheText style={styles.titleText}>
                {PHASES.PHASE_D.title}
              </PsycheText>
              <Entypo
                style={styles.chevron}
                name="chevron-small-right"
                size={32}
                color="#FFFFFF"
              />
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
              <PsycheText style={styles.dateText}>
                {PHASES.PHASE_E.date}
              </PsycheText>
              <View style={styles.circle} />
              <PsycheText style={styles.titleText}>
                {PHASES.PHASE_E.title}
              </PsycheText>
              <Entypo
                style={styles.chevron}
                name="chevron-small-right"
                size={32}
                color="#FFFFFF"
              />
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
              <PsycheText style={styles.dateText}>
                {PHASES.PHASE_F.date}
              </PsycheText>
              <View style={styles.circle} />
              <PsycheText style={styles.titleText}>
                {PHASES.PHASE_F.title}
              </PsycheText>
              <Entypo
                style={styles.chevron}
                name="chevron-small-right"
                size={32}
                color="#FFFFFF"
              />
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.line} />
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
        <ScrollView style={{ backgroundColor: "#FFFFFF" }}>
          <PsycheText style={styles.detailPhase}>{phase_prop.phase}</PsycheText>
          {phase_prop.checkpoints.map((checkpoint, i) => (
            <View key={i}>
              <PsycheText key={i + 1} style={styles.detailPhaseTitle}>
                {checkpoint.title}
              </PsycheText>
              <PsycheText key={i + 2} style={styles.detailDate}>
                {checkpoint.date}
              </PsycheText>
              {checkpoint.bullets.map((bullet, k) => (
                <PsycheText key={k} style={styles.detailBullet}>
                  {bullet}
                </PsycheText>
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
  card: {
    backgroundColor: "rgba(89,38,81, .15)",
    margin: 20,
    height: 85,
    flexDirection: "row",
    alignItems: "center",
    width: "100%"
  },
  phaseText: {
    fontSize: 40,
    fontWeight: "bold",
    color: COLORS.psychePurple
  },
  titleText: {
    color: COLORS.psychePurple,
    textAlign: "left",
    fontSize: 12,
    position: "absolute",
    left: "45%",
    width: "30%"
  },
  dateText: {
    color: COLORS.psychePurple,
    fontWeight: "bold",
    position: "absolute",
    left: "4%",
    fontSize: 18
  },
  detailPhase: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 8,
    marginRight: 8,
    marginLeft: 8,
    color: COLORS.psychePurple
  },
  detailPhaseTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 2,
    marginRight: 8,
    marginLeft: 8,
    color: COLORS.psycheCoral
  },
  detailDate: {
    fontSize: 18,
    fontWeight: "200",
    marginTop: 4,
    marginBottom: 2,
    marginLeft: 8,
    color: COLORS.psychePurple
  },
  detailBullet: {
    fontSize: 16,
    marginTop: 6,
    marginBottom: 6,
    marginRight: 8,
    marginLeft: 8,
    color: COLORS.psycheDarkPurple
  },
  line: {
    width: 2,
    left: "35%",
    backgroundColor: COLORS.psychePurple,
    position: "absolute",
    height: 1000
  },
  circle: {
    backgroundColor: COLORS.psychePurple,
    position: "absolute",
    left: "33.5%",
    width: 14,
    height: 14,
    borderRadius: 14 / 2
  },
  chevron: {
    position: "absolute",
    color: COLORS.psychePurple,
    left: "90%"
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
      },
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: Colors.primaryColor,
        borderBottomColor: "transparent"
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
