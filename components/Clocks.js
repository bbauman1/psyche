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
import Colors from "../constants/Colors";

class BaseClock extends React.Component {
  constructor(props) {
    super(props);
    this.countDownDate = props.countDownDate;

    this.state = {
      clockTitle: props.clockTitle,
      countdown: this._get_current_countdown()
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
    return countdown.timeTillLaunch(new Date().getTime(), this.countDownDate);
  }
}

export class CountDownClockVertical extends BaseClock {
  render() {
    let countdown = this.state.countdown ? this.state.countdown : {};
    if (!this.state.countdown) {
      return <View style={styles.loading} />;
    }
    return (
      <Grid>
        <Col size={4} />
        <Col size={2}>
          <Row style={styles.countDownRow}>
            <MonoText style={styles.countDownTextVertical}>
              {countdown.years}
            </MonoText>
            <MonoText style={styles.countdownTextDurationVertical}> Y</MonoText>
          </Row>
          <Row style={styles.countDownRow}>
            <MonoText style={styles.countDownTextVertical}>
              {countdown.months}
            </MonoText>
            <MonoText style={styles.countdownTextDurationVertical}> M</MonoText>
          </Row>
          <Row style={styles.countDownRow}>
            <MonoText style={styles.countDownTextVertical}>
              {countdown.days}
            </MonoText>
            <MonoText style={styles.countdownTextDurationVertical}> D</MonoText>
          </Row>
          <Row style={styles.countDownRow}>
            <MonoText style={styles.countDownTextVertical}>
              {countdown.hours}
            </MonoText>
            <MonoText style={styles.countdownTextDurationVertical}> H</MonoText>
          </Row>
          <Row style={styles.countDownRow}>
            <MonoText style={styles.countDownTextVertical}>
              {countdown.minutes}
            </MonoText>
            <MonoText style={styles.countdownTextDurationVertical}>
              {" "}
              Min
            </MonoText>
          </Row>
          <Row style={styles.countDownRow}>
            <MonoText style={styles.countDownTextVertical}>
              {countdown.seconds}
            </MonoText>
            <MonoText style={styles.countdownTextDurationVertical}>
              {" "}
              Sec
            </MonoText>
          </Row>
        </Col>
        <Col size={4} />
      </Grid>
    );
  }
}

export class CountDownClockHorizontal extends BaseClock {
  render() {
    let countdown = this.state.countdown ? this.state.countdown : {};
    if (!this.state.countdown) {
      return <View style={styles.loading} />;
    }
    return (
      <View style={styles.container}>
        <Grid>
          <Row size={25}>
            <MonoText style={styles.countDownTitle}>
              {this.state.clockTitle}
            </MonoText>
          </Row>
          <Row size={25}>
            <Col style={styles.countDownCol}>
              <MonoText style={styles.countdownTextHorizontal}>
                {countdown.years}
              </MonoText>
              <MonoText style={styles.countdownTextDurationHorizontal}>
                {" "}
                Years
              </MonoText>
            </Col>
            <Col style={styles.countDownCol}>
              <MonoText style={styles.countdownTextHorizontal}>
                {countdown.months}
              </MonoText>
              <MonoText style={styles.countdownTextDurationHorizontal}>
                {" "}
                Months
              </MonoText>
            </Col>
            <Col style={styles.countDownCol}>
              <MonoText style={styles.countdownTextHorizontal}>
                {countdown.days}
              </MonoText>
              <MonoText style={styles.countdownTextDurationHorizontal}>
                {" "}
                Days
              </MonoText>
            </Col>
            <Col style={styles.countDownCol}>
              <MonoText style={styles.countdownTextHorizontal}>
                {countdown.hours}
              </MonoText>
              <MonoText style={styles.countdownTextDurationHorizontal}>
                {" "}
                Hours
              </MonoText>
            </Col>
            <Col style={styles.countDownCol}>
              <MonoText style={styles.countdownTextHorizontal}>
                {countdown.minutes}
              </MonoText>
              <MonoText style={styles.countdownTextDurationHorizontal}>
                {" "}
                Minutes
              </MonoText>
            </Col>
            <Col style={styles.countDownCol}>
              <MonoText style={styles.countdownTextHorizontal}>
                {countdown.seconds}
              </MonoText>
              <MonoText style={styles.countdownTextDurationHorizontal}>
                {" "}
                Seconds
              </MonoText>
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
    textAlign: "center",
    fontWeight: "bold",
    width: "100%",
    color: Colors.primaryColor,
    fontSize: 16
  },
  countDownCol: {
    alignItems: "center",
    width: "100%"
  },
  countDownRow: {
    alignItems: "center"
  },
  countdownTextDurationVertical: {
    fontWeight: "bold",
    color: Colors.primaryColor,
    fontSize: 12
  },
  countDownTextVertical: {
    fontWeight: "bold",
    color: Colors.primaryColor,
    fontSize: 50
  },

  countdownTextDurationHorizontal: {
    fontWeight: "bold",
    color: Colors.primaryColor,
    fontSize: 12
  },
  countdownTextHorizontal: {
    fontWeight: "bold",
    color: Colors.primaryColor,
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
  }
});
