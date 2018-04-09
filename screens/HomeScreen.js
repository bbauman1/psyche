import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Button,
  StatusBar,
  Image,
  Platform,
  TouchableOpacity
} from "react-native";
import { StackNavigator } from "react-navigation";
import { Row, Grid } from "react-native-easy-grid";
import {
  CountDownClockHorizontal,
  CountDownClockVertical
} from "../components/Clocks";
import { Ionicons } from "@expo/vector-icons";
import { ImagePicker } from "expo";
import countdown from "../util/countdown";
import Dates from "../constants/Dates";
import Colors from "../constants/Colors";
import { FloatingAction } from 'react-native-floating-action';
import { PsycheText } from "../components/StyledText";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      horizontalCountdown: false
    };
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: "Countdown",
      headerRight: (
        <Image
          source={require("../assets/images/meatball.png")}
          style={{ width: 48, height: 48, marginRight: 18 }}
        />
      ),
      headerLeft: (
        <Ionicons
          name={"ios-camera-outline"}
          size={32}
          color={"#fff"}
          style={{ marginLeft: 18 }}
          onPress={() => params.handleLeftHeader()}
        />
      )
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({
      handleLeftHeader: this._pickImage.bind(this)
    });

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

  _get_current_countdown() {
    return countdown.timeTillLaunch(new Date().getTime(), Dates.launch);
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false,
      aspect: [4, 3]
    });

    if (!result.cancelled) {
      this.props.navigation.navigate("Modal", {
        image: result.uri
      });
    }
  };

  render() {
    const countdown = this.state.countdown ? this.state.countdown : {};
    const horizontalCountdown = this.state.horizontalCountdown;

    if (!this.state.countdown) {
      return <View style={styles.loading} />;
    }
    return (
      <View style={styles.container}>
        {!horizontalCountdown && (
          <CountDownClockVertical countDownDate={Dates.launch} />
        )}
        {horizontalCountdown && (
          <Grid>
            <Row size={20}>
              <CountDownClockHorizontal
                clockTitle="Launch"
                countDownDate={Dates.launch}
              />
            </Row>
            <Row size={20}>
              <CountDownClockHorizontal
                clockTitle="Mars Encounter"
                countDownDate={Dates.mars}
              />
            </Row>
            <Row size={20}>
              <CountDownClockHorizontal
                clockTitle="16 Psyche Arrival"
                countDownDate={Dates.arrival}
              />
            </Row>
            <Row size={10} />
          </Grid>
        )}
        <FloatingAction
          actions={[]}
          color={Colors.primaryColor}
          showBackground={false}
          onPressMain={() => {
            this.setState({ horizontalCountdown: !horizontalCountdown });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  loading: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
