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

class DetailsScreen extends React.Component {
  static navigationOptions = {};

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
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
