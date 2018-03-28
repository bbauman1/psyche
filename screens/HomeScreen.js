import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Button,
  StatusBar
} from "react-native";
import { StackNavigator } from "react-navigation";
import { Col, Row, Grid } from "react-native-easy-grid";
import {
  CountDownClockHorizontal,
  CountDownClockVertical
} from "../components/Clocks";
import { MonoText } from "../components/StyledText";
import { Ionicons } from "@expo/vector-icons";
import { connectActionSheet } from "@expo/react-native-action-sheet";
import { ImagePicker } from "expo";
import countdown from "../util/countdown";
import Dates from "../constants/Dates";

@connectActionSheet
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
    const { params = {} } = navigation.state;
    return {
      title: "Countdown",
      headerLeft: (
        <Ionicons
          name={"ios-camera-outline"}
          size={32}
          color={"#fff"}
          style={{ marginLeft: 18 }}
          onPress={() => params.handleActionSheet()}
        />
      )
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({
      handleActionSheet: this._onOpenActionSheet.bind(this)
    });
  }

  _get_current_countdown() {
    return countdown.timeTillLaunch(new Date().getTime(), Dates.launch);
  }

  _onOpenActionSheet = () => {
    let options = ["Open Camera", "Choose From Photos", "Cancel"];
    let cancelButtonIndex = 2;
    this.props.showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex
      },
      buttonIndex => {
        if (buttonIndex == 0) {
        } else if (buttonIndex == 1) {
          this._pickImage();
        }
      }
    );
  };

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
        <StatusBar barStyle="light-content" />
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
              countDownDate={Dates.launch}
            />
          </Row>
          <Row size={20}>
            <CountDownClockHorizontal
              clockTitle="16 Psyche Arrival"
              countDownDate={Dates.launch}
            />
          </Row>
        </Grid>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  countDownRow: {
    alignItems: "center"
  },
  countdownTextDuration: {
    fontWeight: "bold",
    fontSize: 12
  },
  countdownText: {
    fontWeight: "bold",
    fontSize: 24
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
