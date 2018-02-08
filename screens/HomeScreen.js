import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import timeTillLaunch from "../util/countdown";
import launchDate from "../constants/Dates";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setInterval(
      () =>
        this.setState(() => {
          return {
            countdown: this._get_current_countdown()
          };
        }),
      1000
    );
  }
  static navigationOptions = {
    title: "Countdown"
  };

  _get_current_countdown() {
    return timeTillLaunch.timeTillLaunch(
      new Date().getTime(),
      launchDate.launchDate
    );
  }

  render() {
    let countdown = this._get_current_countdown();
    return (
      <ScrollView style={styles.container}>
        <View style={styles.countdownContainer}>
          <Text style={styles.countdownText}>{countdown.years} Ys</Text>
          <Text style={styles.countdownText}>{countdown.days} Ds</Text>
          <Text style={styles.countdownText}>{countdown.hours} Hs</Text>
          <Text style={styles.countdownText}>{countdown.minutes} Ms</Text>
          <Text style={styles.countdownText}>{countdown.seconds} Ss</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  countdownText: {
    fontWeight: "bold",
    fontSize: 52,
    color: "purple"
  },
  countdownContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
