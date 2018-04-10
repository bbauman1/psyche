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
import { ImagePicker, WebBrowser } from "expo";
import countdown from "../util/countdown";
import Dates from "../constants/Dates";
import Colors from "../constants/Colors";
import { PsycheText } from "../components/StyledText";
import { connectActionSheet } from '@expo/react-native-action-sheet';

@connectActionSheet
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
        <TouchableOpacity onPress={() => params.handleRightHeader()}>
          <Image
            source={require("../assets/images/meatball.png")}
            style={{ width: 48, height: 48, marginRight: 18 }}
          />
        </TouchableOpacity>
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
      handleLeftHeader: this._pickImage.bind(this),
      handleRightHeader: this._openActionSheet.bind(this)
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

  _openActionSheet = () => {
    const options = ['NASA Website', 'Psyche Website', 'Cancel'];
    const cancelButtonIndex = 2;

    this.props.showActionSheetWithOptions({
      options,
      cancelButtonIndex
    },
      (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            WebBrowser.openBrowserAsync('https://www.nasa.gov/');
            break;
          case 1:
            WebBrowser.openBrowserAsync('https://psyche.asu.edu/');
            break;
          default:
            break;
        }
      });
  }

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
          <PsycheText style={{ color: "#fff" }}>
            4 Years Until Launch
          </PsycheText>
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
