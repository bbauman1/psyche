import React from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableHighlight,
  Button,
  Alert,
  Dimensions,
  PanResponder,
  WebView,
  Modal,
  StatusBar
} from "react-native";
import { StackNavigator, HeaderBackButton } from "react-navigation";
import Colors from "../constants/Colors.js";

/*Reference https://projects.invisionapp.com/share/47EEC5Z5U#/screens/262903252 */

//Loading indicator
const loadingIndicator = (
  <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
    <ActivityIndicator size="large" color={Colors.primaryColor} />
    <Text color="#0000ee">Loading</Text>
  </View>
);

/*** GALLERY ***/
class Gallery extends React.Component {
  static navigationOptions = {
    title: "Gallery",
    headerStyle: { backgroundColor: Colors.primaryColor },
    headerTitleStyle: { color: "white" }
  };

  constructor(props) {
    super(props);

    this.files = require("../assets/gallery_db.json");

    this.width = Dimensions.get("window").width;
    this.height = Dimensions.get("window").height;
    const square = Math.floor(Dimensions.get("window").width / 3);
    this.rows = new Array(Math.ceil(this.files.length / 3));
    for (let i = 0; i < this.rows.length; i++) {
      row = [];
      for (let j = 0; j < 3 && i * 3 + j < this.files.length; j++) {
        let fileName = this.files[i * 3 + j].name;
        let mediaType = this.files[i * 3 + j].mediaType;
        let uri = this.files[i * 3 + j].uri;
        row[j] = (
          <MediaContainer
            key={i * 3 + j}
            index={i * 3 + j}
            width={square}
            file_db_ref={this.files}
            callback={this.selectCallback}
          />
        );
      }
      this.rows[i] = <MediaRow key={i} frames={row} />;
    }
  }

  selectCallback = data => {
    const { navigate } = this.props.navigation;
    navigate("Media", data);
  };
  render() {
    return <ScrollView style={styles.gallery}>{this.rows}</ScrollView>;
  }
}
class MediaRow extends React.Component {
  render() {
    return <View style={{ flexDirection: "row" }}>{this.props.frames}</View>;
  }
}
/*** END GALLERY ***/

/*** MEDIACONTAINER ***/
class MediaContainer extends React.Component {
  constructor(props) {
    super(props);

    this.mediaType = this.props.file_db_ref[this.props.index].mediaType;
    this.uriMedia =
      this.mediaType === "image"
        ? this.props.file_db_ref[this.props.index].uri
        : this.props.file_db_ref[this.props.index].prev;

    this.state = {
      loadingPicture: true
    };
  }
  onPress = () => {
    this.props.callback({
      index: this.props.index,
      file_db_ref: this.props.file_db_ref
    });
  };
  render() {
    return (
      <TouchableHighlight
        onPress={this.onPress}
        underlayColor={"#fff"}
        style={{ alignItems: "center" }}
      >
        <Image
          source={{ uri: this.uriMedia }}
          style={{
            width: this.props.width,
            height: this.props.width,
            borderWidth: 0.8,
            borderColor: styles.gallery.backgroundColor
          }}
        />
      </TouchableHighlight>
    );
  }
}
/*** END MEDIACONTAINER ***/

/*** MEDIAINFOVIEWER ***/
class MediaInfoViewer extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;

    return {
      headerRight: (
        <Button
          title={"Info"}
          color={"white"}
          onPress={() => params._toggleModal()}
        />
      )
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      loadingPicture: true,
      xTrans: 0,
      windowDim: Dimensions.get("window"),
      modalVisible: false
    };

    this.file_db_ref = this.props.navigation.state.params.file_db_ref;
    this.index = this.props.navigation.state.params.index;

    this.setLocalParams();
  }

  setLocalParams = () => {
    this.mediaURI = this.file_db_ref[this.index].uri;
    this.mediaType = this.file_db_ref[this.index].mediaType;
    this.title = this.file_db_ref[this.index].name;
    this.credit = this.file_db_ref[this.index].credit;
  };

  loadPicture = (width, height) => {
    this.width = width;
    this.height = height;
    this.setState({ loadingPicture: false });
  };

  orientationSwitchLayout = event => {
    this.setState({
      windowDim: Dimensions.get("window")
    });
  };

  toggleModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible && this.mediaType === "image"
    });
  };

  doSwipe = indexChange => {
    this.index = indexChange;
    this.mediaURI = this.file_db_ref[this.index].uri;
    this.mediaType = this.file_db_ref[this.index].mediaType;
    this.setState({ loadingPicture: true, xTrans: 0 });
    this.setLocalParams();
  };

  doLeftSwipe = () => {
    this.doSwipe(
      this.index === 0 ? this.file_db_ref.length - 1 : this.index - 1
    );
  };

  doRightSwipe = () => {
    this.doSwipe((this.index + 1) % this.file_db_ref.length);
  };

  componentWillMount = () => {
    this.props.navigation.setParams({
      _toggleModal: this.toggleModal
    });
    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => false,
      onStartShouldSetPanResponderCapture: (evt, gestureState) =>
        !this.state.modalVisible,
      onMoveShouldSetPanResponder: (evt, gestureState) => false,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) =>
        !this.state.modalVisible,

      onPanResponderGrant: (evt, gestureState) => {
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        // gestureState.d{x,y} will be set to zero now
      },
      onPanResponderMove: (evt, gestureState) => {
        // The most recent move distance is gestureState.move{X,Y}
        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}
        this.setState({ xTrans: gestureState.dx });
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
        const threshold = 30;
        if (gestureState.dx > threshold) {
          this.doLeftSwipe();
        } else if (gestureState.dx < -1 * threshold) {
          this.doRightSwipe();
        } else {
          this.setState({ xTrans: 0 });
        }
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      }
    });
  };

  componentWillUnmount = () => {
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);
  };
  render() {
    //Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.ALL);

    if (this.mediaType === "image") {
      //The image is loading
      if (this.state.loadingPicture === true) {
        Image.getSize(this.mediaURI, this.loadPicture);
        return (
          <View
            style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
          >
            {loadingIndicator}
          </View>
        );
      } else {
        //The image has been downloaded and cached

        //constants for calculating correct fitting
        const imgAspectRatio = this.width / this.height;
        const windowWidth = this.state.windowDim.width;
        const windowHeight = this.state.windowDim.height;
        const windowAspectRatio = windowWidth / windowHeight;

        //create image component with fititng calculation
        let img = (
          <Image
            source={{ uri: this.mediaURI }}
            style={{
              width:
                windowAspectRatio > imgAspectRatio
                  ? this.width * windowHeight / this.height
                  : windowWidth,
              height:
                windowAspectRatio > imgAspectRatio
                  ? windowHeight
                  : this.height * windowWidth / this.width
            }}
          />
        );
        //Display image with swipe gesture and information
        return (
          <View
            onLayout={this.orientationSwitchLayout}
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              transform: [{ translateX: this.state.xTrans }]
            }}
            {...this._panResponder.panHandlers}
          >
            {img}
            <Modal
              animationType="slide"
              transparent={true}
              visible={this.state.modalVisible}
              style={{ flex: 1 }}
            >
              <View
                style={{ backgroundColor: Colors.primaryColor, marginTop: 30 }}
              >
                <Button
                  title="Close"
                  color={"white"}
                  onPress={this.toggleModal}
                />
                <InformationPanel title={this.title} credit={this.credit} />
              </View>
            </Modal>
          </View>
        );
      }
    } else if (this.mediaType === "video") {
      return (
        <View
          onLayout={this.orientationSwitchLayout}
          style={{
            flex: 1,
            justifyContent: "center",
            transform: [{ translateX: this.state.xTrans }]
          }}
          {...this._panResponder.panHandlers}
        >
          <WebView
            source={{ uri: this.mediaURI }}
            style={{ flex: 1 }}
            renderLoading={() => {
              return loadingIndicator;
            }}
            startInLoadingState={true}
          />
        </View>
      );
    } else {
      let msg = "Type of media not supported";
      Alert.alert(msg);
      return <Text>{msg}</Text>;
    }
  }
}
/*** END MEDIAINFOVIEWER ***/

/***  INFORMATION PANEL ***/
class InformationPanel extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.informationPanelHeaders}>Title</Text>
        <Text style={styles.informationPanelText}>{this.props.title}</Text>
        <Text style={styles.informationPanelHeaders}>Credit</Text>
        <Text style={styles.informationPanelText}>{this.props.credit}</Text>
      </View>
    );
  }
}
/*** END INFORMATION PANEL ***/

/*** GLOBAL SCREEN StackNavigator ***/
const LocalPageNavigator = StackNavigator(
  {
    Main: {
      screen: Gallery
    },
    Media: {
      screen: MediaInfoViewer,
      navigationOptions: ({ navigation }) => ({
        gesturesEnabled: false,
        headerStyle: { backgroundColor: Colors.primaryColor },
        headerLeft: (
          <HeaderBackButton
            tintColor={"white"}
            title="Gallery"
            onPress={() => {
              Expo.ScreenOrientation.allow(
                Expo.ScreenOrientation.Orientation.PORTRAIT
              );
              navigation.goBack(null);
            }}
          />
        )
      })
    }
  },
  {
    headerMode: "screen"
  }
);

export default class GalleryScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <LocalPageNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gallery: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#1b1226"
  },
  informationPanelHeaders: {
    fontWeight: "bold",
    color: "white",
    fontSize: 26
  },
  informationPanelText: {
    color: "white"
  },
  headerButtons: {
    tintColor: "white"
  }
});
