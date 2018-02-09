import React from "react";
import { ScrollView, StyleSheet, View, Text, Button } from "react-native";
import { StackNavigator } from "react-navigation";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Ionicons } from "@expo/vector-icons";
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
                <MonoText style={styles.countdownText}>
                  {countdown.days}
                </MonoText>
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
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  countDownRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
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
