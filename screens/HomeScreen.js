import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Button,
  StatusBar,
  Image,
  Platform,
  TouchableOpacity
} from "react-native";
import { StackNavigator } from "react-navigation";
import { Col, Row, Grid } from "react-native-easy-grid";
import {
  CountDownClockHorizontal,
  CountDownClockVertical
} from "../components/Clocks";
import { MonoText } from "../components/StyledText";
import { Ionicons } from "@expo/vector-icons";
import { ImagePicker } from "expo";
import countdown from "../util/countdown";
import Dates from "../constants/Dates";
import Colors from "../constants/Colors";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countdown: this._get_current_countdown(),
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

    console.log(result);

    if (!result.cancelled) {
      this.props.navigation.navigate("Modal", {
        image: result.uri
      });
    }
  };

  render() {
    let countdown = this.state.countdown ? this.state.countdown : {};
    let horizontalCountdown = this.state.horizontalCountdown;
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
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.timelineButton}
          onPress={() => {
            this.setState({ horizontalCountdown: !horizontalCountdown });
          }}
        >
          <Text style={{ color: "#fff" }}>4 Years Until Launch</Text>
        </TouchableOpacity>
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
          </Grid>
        )}
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
  },
  timelineButton: {
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: Colors.primaryColor,
    paddingVertical: 20
  }
});
