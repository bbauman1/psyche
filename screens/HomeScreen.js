import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Button,
  StatusBar,
  Image,
  Platform,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import { StackNavigator } from "react-navigation";
import { Row, Grid } from "react-native-easy-grid";
import {
  CountDownClockHorizontal,
  CountDownClockVertical
} from "../components/Clocks";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { ImagePicker, WebBrowser } from "expo";
import countdown from "../util/countdown";
import Dates from "../constants/Dates";
import Colors from "../constants/Colors";
import { FloatingAction } from "react-native-floating-action";
import { PsycheText } from "../components/StyledText";
import { connectActionSheet } from "@expo/react-native-action-sheet";
import Onboarding from "react-native-onboarding-swiper";

@connectActionSheet
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      horizontalCountdown: false,
      onboardingDone: null
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
        <TouchableOpacity onPress={() => params.handleLeftHeader()}>
          <Image
            source={require("../assets/images/photo-album.png")}
            style={{ width: 32, height: 26, marginLeft: 18 }}
          />
        </TouchableOpacity>
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

    AsyncStorage.getItem("@Pysche:firstLaunch").then(value => {
      if (value === null) {
        AsyncStorage.setItem("@Pysche:firstLaunch", "true");
        this.props.navigation.navigate("Onboarding");
      }
      this.setState({ onboardingDone: true });
    });
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

  _openActionSheet = () => {
    const options = ["NASA Website", "Psyche Website", "Cancel"];
    const cancelButtonIndex = 2;

    this.props.showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex
      },
      buttonIndex => {
        switch (buttonIndex) {
          case 0:
            WebBrowser.openBrowserAsync("https://www.nasa.gov/");
            break;
          case 1:
            WebBrowser.openBrowserAsync("https://psyche.asu.edu/");
            break;
          default:
            break;
        }
      }
    );
  };

  render() {
    const horizontalCountdown = this.state.horizontalCountdown;
    const buttonIcon = this.state.horizontalCountdown
      ? "hourglass-3"
      : "hourglass-1";

    if (this.state.onboardingDone === null) {
      return <View style={styles.loading} />;
    }
    else {
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
            actions={[
              {
                text: "Accessibility",
                icon: <FontAwesome name={buttonIcon} size={24} color={"#fff"} />,
                name: "hourGlass",
                position: 1
              }
            ]}
            color={Colors.primaryColor}
            showBackground={true}
            overrideWithAction={true}
            onPressItem={() => {
              this.setState({ horizontalCountdown: !horizontalCountdown });
            }}
          />
        </View>
      );
    }
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
