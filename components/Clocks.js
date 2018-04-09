import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Button,
  StatusBar
} from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Ionicons } from "@expo/vector-icons";
import { MonoText } from "../components/StyledText";
import { ImagePicker } from "expo";
import countdown from "../util/countdown";

export class CountDownClockVertical extends React.Component {}

export class CountDownClockHorizontal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countdown: false,
      countdownDate: props.countDownDate,
      clockTitle: props.clockTitle
    };
  }

  componentDidMount() {
    this.interval = setInterval(
      () =>
        this.setState(() => {
          return {
            countdown: this._get_current_countdown()
          };
        }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  _get_current_countdown() {
    return countdown.timeTillLaunch(
      new Date().getTime(),
      this.state.countdownDate
    );
  }

  render() {
    let countdown = this.state.countdown ? this.state.countdown : {};
    if (!this.state.countdown) {
      return <View style={styles.loading} />;
    }
    return (
      <View style={styles.container}>
        <Grid>
          <Row size={25}>
            <MonoText style={styles.title}>{this.state.clockTitle}</MonoText>
          </Row>
          <Row size={25}>
            <Col style={styles.countDownCol}>
              <MonoText style={styles.countdownText}>
                {countdown.years}
              </MonoText>
              <MonoText style={styles.countdownTextDuration}> Years</MonoText>
            </Col>
            <Col style={styles.countDownCol}>
              <MonoText style={styles.countdownText}>
                {countdown.months}
              </MonoText>
              <MonoText style={styles.countdownTextDuration}> Months</MonoText>
            </Col>
            <Col style={styles.countDownCol}>
              <MonoText style={styles.countdownText}>{countdown.days}</MonoText>
              <MonoText style={styles.countdownTextDuration}> Days</MonoText>
            </Col>
            <Col style={styles.countDownCol}>
              <MonoText style={styles.countdownText}>
                {countdown.hours}
              </MonoText>
              <MonoText style={styles.countdownTextDuration}> Hours</MonoText>
            </Col>
            <Col style={styles.countDownCol}>
              <MonoText style={styles.countdownText}>
                {countdown.minutes}
              </MonoText>
              <MonoText style={styles.countdownTextDuration}> Minutes</MonoText>
            </Col>
            <Col style={styles.countDownCol}>
              <MonoText style={styles.countdownText}>
                {countdown.seconds}
              </MonoText>
              <MonoText style={styles.countdownTextDuration}> Seconds</MonoText>
            </Col>
          </Row>
          <Row size={25} />
        </Grid>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  countDownTitle: {
    justifyContent: "center",
    fontSize: 16
  },
  countDownCol: {
    alignItems: "center",
    width: "100%"
  },
  countdownTextDuration: {
    fontWeight: "bold",
    fontSize: 12
  },
  countdownText: {
    fontWeight: "bold",
    fontSize: 16
  },
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  loading: {
    flex: 1,
    backgroundColor: "#fff"
  },
  title: {
    textAlign: "center",
    width: "100%"
  }
});
