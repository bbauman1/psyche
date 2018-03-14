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
  WebView
} from "react-native";
import { StackNavigator, HeaderBackButton } from "react-navigation";

// import GestureRecognizer, {
//   swipeDirections
// } from "react-native-swipe-gestures";
/*Reference https://projects.invisionapp.com/share/47EEC5Z5U#/screens/262903252 */

/*** GALLERY ***/
class Gallery extends React.Component {
  static navigationOptions = {
    title: "Gallery"
  };

  constructor(props) {
    super(props);

    base = "http://www.public.asu.edu/~abetczyn/";

    this.files = [];
    this.files[0] = { name: "1.jpg", mediaType: "image" };
    this.files[1] = { name: "2.jpg", mediaType: "image" };
    this.files[2] = { name: "3.jpg", mediaType: "image" };
    //files[3] = { name: "4.jpg", mediaType: "image" };
    this.files[3] = { name: "https://player.vimeo.com/video/194399729", mediaType: "video" };
    //We will finish getting index.txt later
    this.width = Dimensions.get("window").width;
    this.height = Dimensions.get("window").height;
    const square = Math.floor(Dimensions.get("window").width / 3);
    this.rows = new Array(Math.ceil(this.files.length / 3));
    for (let i = 0; i < this.rows.length; i++) {
      row = [];
      for (let j = 0; j < 3 && i * 3 + j < this.files.length; j++) {
        let fileName = this.files[i * 3 + j].name;
        let mediaType = this.files[i * 3 + j].mediaType;
        row[j] = (
          <MediaContainer
            key={i * 3 + j}
            index={i * 3 + j}
            width={square}
            file_db_ref={this.files}
            callback={this.selectCallback}
            base={base}
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

/*** MEDIACONTAINER ***/
class MediaContainer extends React.Component {
  constructor(props) {
    super(props);
    this.uriMedia =
      this.props.base + this.props.file_db_ref[this.props.index].name;
    this.mediaType = this.props.file_db_ref[this.props.index].mediaType;
  }
  onPress = () => {
    this.props.callback({
      index: this.props.index,
      file_db_ref: this.props.file_db_ref,
      base: this.props.base
    });
  };
  render() {
    //uriMedia at {{uri will be changed to PREVIEW version
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
            borderWidth: 1.0,
            borderColor: "#fff"
          }}
        />
      </TouchableHighlight>
    );
  }
}

/*** MEDIAINFOVIEWER ***/
class MediaInfoViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingPicture: true,
      readySwipe: true,
      xTrans: 0,
      windowDim: Dimensions.get("window")
    };

    this.file_db_ref = this.props.navigation.state.params.file_db_ref;
    this.index = this.props.navigation.state.params.index;

    this.mediaURI =
      this.props.navigation.state.params.base +
      this.file_db_ref[this.index].name;
    this.mediaType = this.file_db_ref[this.index].mediaType;
  }

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

  setZoomReference = reference => {
    if (reference) {
      this.zoomReference = reference;
      this.scrollResponderReference = this.zoomReference.getScrollResponder();
    }
  };

  doResetImageZoom = event => {
    this.scrollResponderReference.scrollResponderZoomTo({
      x: 0,
      y: 0,
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height,
      animated: true
    });
    this.setState({ readySwipe: true });
  };

  doSwipe = indexChange => {
    this.index = indexChange;
    this.mediaURI =
      this.props.navigation.state.params.base +
      this.file_db_ref[this.index].name;
    this.mediaType = this.file_db_ref[this.index].mediaType;
    this.setState({ loadingPicture: true, xTrans: 0 });
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
    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        // gestureState.d{x,y} will be set to zero now
      },
      onPanResponderMove: (evt, gestureState) => {
        // The most recent move distance is gestureState.move{X,Y}
        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}
        console.log("state", gestureState);
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
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.ALL);
    if (this.mediaType === "image") {
      if (this.state.loadingPicture === true) {
        Image.getSize(this.mediaURI, this.loadPicture);
        return (
          <View
            style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
          >
            <ActivityIndicator size="large" color="#0000ee" />
            <Text color="#0000ee">Loading</Text>
          </View>
        );
      } else {
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
          </View>
        );
        // if (this.state.readySwipe) {
        //   console.log(...this._panResponder.panHandlers);
        //   return <View {...this._panResponder.panHandlers}>{img}</View>;
        // } else {
        //   console.log("ZOOM_MODE");
        //   return (
        //     <ScrollView
        //       contentContainerStyle={{
        //         alignItems: "center",
        //         justifyContent: "center"
        //       }}
        //       centerContent
        //       showsHorizontalScrollIndicator={false}
        //       showsVerticalScrollIndicator={false}
        //       maximumZoomScale={4}
        //       minimumZoomScale={1}
        //       ref={this.setZoomReference}
        //     >
        //       <TouchableHighlight
        //         onPress={this.doResetImageZoom}
        //         activeOpacity={100}
        //       >
        //         {img}
        //       </TouchableHighlight>
        //     </ScrollView>
        //   );
        // }
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
            source={{uri: this.file_db_ref[this.index].name}}
            style={{flex: 1}}
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

/*** Video Wrapper ***/
class VideoWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Video
        source={{ uri: this.props.mediaURI }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode={"contain"}
        shouldPlay
        style={{ flex: 1 }}
        ref={ref => {
          this.player = ref;
        }}
        useNativeControls={true}
      />
    );
  }
}

/*** GLOBAL SCREEN ***/
const LocalPageNavigator = StackNavigator(
  {
    Main: {
      screen: Gallery
    },
    Media: {
      screen: MediaInfoViewer,
      navigationOptions: ({ navigation }) => ({
        gesturesEnabled: false,
        headerLeft: (
          <HeaderBackButton
            title="Back to Gallery"
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
    return <LocalPageNavigator />;
  }
}

const styles = StyleSheet.create({
  gallery: {
    flex: 1,
    flexDirection: "column"
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  mediaInfoViewerArrows: {
    //This will need editing
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});
