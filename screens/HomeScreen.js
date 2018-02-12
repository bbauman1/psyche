import React from "react";
import { ScrollView, StyleSheet, View, Text, Button } from "react-native";
import { StackNavigator } from "react-navigation";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Ionicons } from "@expo/vector-icons";
import { MonoText } from "../components/StyledText";
import countdown from "../util/countdown";
import Dates from "../constants/Dates";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { countdown: false };

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

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Countdown",
      headerLeft: (
        <Ionicons
          name={"ios-camera-outline"}
          size={32}
          color={"#000"}
          style={{ marginLeft: 18 }}
          onPress={() => navigation.navigate("Modal")}
        />
      )
    };
  };

  _get_current_countdown() {
    return countdown.timeTillLaunch(new Date().getTime(), Dates.launch);
  }

  render() {
    let countdown = this.state.countdown ? this.state.countdown : {};

    /**
     *  In the future this file will have the preloading/caching for images
     *  and assets since it is the home screen. That'll most likely make this
     *  code irrelevant since the splash screen will be displayed, but good
     *  to have incase the loading is finished before the countdown is ready.
     **/

    if (!this.state.countdown) {
      return <View style={styles.loading} />;
    }

    return (
      <ScrollView style={styles.container}>
        <Grid>
          <Col size={4} />
          <Col size={2}>
            <Row style={styles.countDownRow}>
              <MonoText style={styles.countdownText}>
                {countdown.years}
              </MonoText>
              <MonoText style={styles.countdownTextDuration}> Y</MonoText>
            </Row>
            <Row style={styles.countDownRow}>
              <MonoText style={styles.countdownText}>
                {countdown.months}
              </MonoText>
              <MonoText style={styles.countdownTextDuration}> M</MonoText>
            </Row>
            <Row style={styles.countDownRow}>
              <MonoText style={styles.countdownText}>{countdown.days}</MonoText>
              <MonoText style={styles.countdownTextDuration}> D</MonoText>
            </Row>
            <Row style={styles.countDownRow}>
              <MonoText style={styles.countdownText}>
                {countdown.hours}
              </MonoText>
              <MonoText style={styles.countdownTextDuration}> H</MonoText>
            </Row>
            <Row style={styles.countDownRow}>
              <MonoText style={styles.countdownText}>
                {countdown.minutes}
              </MonoText>
              <MonoText style={styles.countdownTextDuration}> Min</MonoText>
            </Row>
            <Row style={styles.countDownRow}>
              <MonoText style={styles.countdownText}>
                {countdown.seconds}
              </MonoText>
              <MonoText style={styles.countdownTextDuration}> Sec</MonoText>
            </Row>
          </Col>
          <Col size={4} />
        </Grid>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  countDownRow: {
    alignItems: "center"
  },
  countdownTextDuration: {
    fontWeight: "bold",
    fontSize: 26
  },
  countdownText: {
    fontWeight: "bold",
    fontSize: 52
  },
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  loading: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
