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
import { PsycheText } from "../components/StyledText";
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
            <PsycheText style={styles.countDownTextVertical}>
              {countdown.years}
            </PsycheText>
            <PsycheText style={styles.countdownTextDurationVertical}>
              {" "}
              Y
            </PsycheText>
          </Row>
          <Row style={styles.countDownRow}>
            <PsycheText style={styles.countDownTextVertical}>
              {countdown.months}
            </PsycheText>
            <PsycheText style={styles.countdownTextDurationVertical}>
              {" "}
              M
            </PsycheText>
          </Row>
          <Row style={styles.countDownRow}>
            <PsycheText style={styles.countDownTextVertical}>
              {countdown.days}
            </PsycheText>
            <PsycheText style={styles.countdownTextDurationVertical}>
              {" "}
              D
            </PsycheText>
          </Row>
          <Row style={styles.countDownRow}>
            <PsycheText style={styles.countDownTextVertical}>
              {countdown.hours}
            </PsycheText>
            <PsycheText style={styles.countdownTextDurationVertical}>
              {" "}
              H
            </PsycheText>
          </Row>
          <Row style={styles.countDownRow}>
            <PsycheText style={styles.countDownTextVertical}>
              {countdown.minutes}
            </PsycheText>
            <PsycheText style={styles.countdownTextDurationVertical}>
              {" "}
              Min
            </PsycheText>
          </Row>
          <Row style={styles.countDownRow}>
            <PsycheText style={styles.countDownTextVertical}>
              {countdown.seconds}
            </PsycheText>
            <PsycheText style={styles.countdownTextDurationVertical}>
              {" "}
              Sec
            </PsycheText>
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
            <PsycheText style={styles.countDownTitle}>
              {this.state.clockTitle}
            </PsycheText>
          </Row>
          <Row size={25}>
            <Col style={styles.countDownCol}>
              <PsycheText style={styles.countdownTextHorizontal}>
                {countdown.years}
              </PsycheText>
              <PsycheText style={styles.countdownTextDurationHorizontal}>
                {" "}
                Years
              </PsycheText>
            </Col>
            <Col style={styles.countDownCol}>
              <PsycheText style={styles.countdownTextHorizontal}>
                {countdown.months}
              </PsycheText>
              <PsycheText style={styles.countdownTextDurationHorizontal}>
                {" "}
                Months
              </PsycheText>
            </Col>
            <Col style={styles.countDownCol}>
              <PsycheText style={styles.countdownTextHorizontal}>
                {countdown.days}
              </PsycheText>
              <PsycheText style={styles.countdownTextDurationHorizontal}>
                {" "}
                Days
              </PsycheText>
            </Col>
            <Col style={styles.countDownCol}>
              <PsycheText style={styles.countdownTextHorizontal}>
                {countdown.hours}
              </PsycheText>
              <PsycheText style={styles.countdownTextDurationHorizontal}>
                {" "}
                Hours
              </PsycheText>
            </Col>
            <Col style={styles.countDownCol}>
              <PsycheText style={styles.countdownTextHorizontal}>
                {countdown.minutes}
              </PsycheText>
              <PsycheText style={styles.countdownTextDurationHorizontal}>
                {" "}
                Minutes
              </PsycheText>
            </Col>
            <Col style={styles.countDownCol}>
              <PsycheText style={styles.countdownTextHorizontal}>
                {countdown.seconds}
              </PsycheText>
              <PsycheText style={styles.countdownTextDurationHorizontal}>
                {" "}
                Seconds
              </PsycheText>
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
