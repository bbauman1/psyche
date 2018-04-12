import React from "react";
import {
  View,
  Button,
  Image,
  StyleSheet,
  CameraRoll,
  TouchableOpacity
} from "react-native";
import { StackNavigator } from "react-navigation";
import { ImagePicker, takeSnapshotAsync } from "expo";
import { Colors } from "../constants/Colors";
import { PsycheText } from "../components/StyledText";

const filterData = [
  {
    path: require("../assets/images/badge-solid.png"),
    style: {
      height: 128,
      width: 128
    }
  },
  {
    path: require("../assets/images/meatball.png"),
    style: {
      height: 128,
      width: 128
    }
  },
  {
    path: require("../assets/images/white-launch-filter.png"),
    style: {
      height: 128,
      width: 344
    }
  }
];

export default class CameraScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterIndex: 0
    };
  }

  static navigationOptions = {
    header: null
  };

  render() {
    const { params } = this.props.navigation.state;
    const image = params ? params.image : null;
    const filterIndex = this.state.filterIndex;

    const filterDetail = filterData[filterIndex];

    return (
      <View style={{ flex: 1 }}>
        <View
          collapsable={false}
          ref={view => {
            this._container = view;
          }}
          style={{
            flex: 1,
            flexDirection: "column-reverse"
          }}
        >
          <Image source={{ uri: image }} style={styles.backgroundImage} />
          <Image
            source={filterDetail.path}
            style={[styles.filter, filterDetail.style]}
          />
        </View>
        <View style={styles.blurredView}>
          <TouchableOpacity
            accessibilityLabel={"Go Back to Main Menu"}
            accessibilityTraits={"button"} // only works in ios
            accessibilityComponentType={"button"} // only works in android
            style={[styles.roundedButton, { marginLeft: 10 }]}
            onPress={() => this.props.navigation.goBack()}
          >
            <PsycheText style={{ color: "#000" }}> Cancel </PsycheText>
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel={"Change filter"}
            accessibilityTraits={"button"} // only works in ios
            accessibilityComponentType={"button"} // only works in android
            style={[styles.roundedButton, { marginLeft: 10, marginRight: 10 }]}
            onPress={() => this._setFilterIndex()}
          >
            <PsycheText style={{ color: "#000" }}> Change Filter </PsycheText>
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel={"Save image"}
            accessibilityTraits={"button"} // only works in ios
            accessibilityComponentType={"button"} // only works in android
            style={[styles.roundedButton, { marginRight: 10 }]}
            onPress={() => this._saveImage()}
          >
            <PsycheText style={{ color: "#000" }}> Save </PsycheText>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _setFilterIndex = () => {
    this.setState(prevState => {
      let newIndex = prevState.filterIndex + 1;
      if (newIndex == filterData.length) {
        newIndex = 0;
      }
      return { filterIndex: newIndex };
    });
  };

  _saveImage = async () => {
    let result = await takeSnapshotAsync(this._container, {
      format: "png",
      result: "file"
    });

    let saveResult = await CameraRoll.saveToCameraRoll(result, "photo");
    this.props.navigation.goBack();
  };
}

const styles = StyleSheet.create({
  blurredView: {
    position: "absolute",
    left: 0,
    right: 0,
    top: Expo.Constants.statusBarHeight,
    bottom: 0,
    height: 64,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: 30,
    overflow: "hidden"
  },
  roundedButton: {
    borderRadius: 30,
    padding: 10,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  backgroundImage: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: undefined,
    height: undefined,
    alignSelf: "stretch"
  },
  filter: {
    marginLeft: 9,
    marginBottom: 9,
    height: 128,
    width: 336,
    alignSelf: "flex-start"
  }
});
