import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { MonoText } from "../components/StyledText";
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
          <MonoText style={styles.countdownText}>{countdown.years} Ys</MonoText>
          <MonoText style={styles.countdownText}>{countdown.days} Ds</MonoText>
          <MonoText style={styles.countdownText}>{countdown.hours} Hs</MonoText>
          <MonoText style={styles.countdownText}>
            {countdown.minutes} Ms
          </MonoText>
          <MonoText style={styles.countdownText}>
            {countdown.seconds} Ss
          </MonoText>
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
