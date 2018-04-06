import React from "react";
import { View, Button, Image, StyleSheet, CameraRoll, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";
import { ImagePicker, takeSnapshotAsync } from "expo";
import Colors from "../constants/Colors";
import { PsycheText } from "../components/StyledText";

export default class CameraScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null
  };

  render() {
    const { params } = this.props.navigation.state;
    const image = params ? params.image : null;

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
          <Image
            source={{ uri: image }}
            style={styles.backgroundImage}
          />
          <Image
            source={require("../assets/images/badge-solid.png")}
            style={{
              marginLeft: 9,
              marginBottom: 9,
              height: 128,
              width: 128,
              alignSelf: "flex-start"
            }}
          />
        </View>
        <View style={styles.blurredView}>
          <TouchableOpacity
            style={[styles.roundedButton, { marginLeft: 10 }]}
            onPress={() => this.props.navigation.goBack()}>
            <PsycheText style={{ color: "#fff" }}> Cancel </PsycheText>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.roundedButton, { marginRight: 10 }]}
            onPress={() => this._saveImage()}>
            <PsycheText style={{ color: "#fff" }}> Save </PsycheText>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _saveImage = async () => {
    let result = await takeSnapshotAsync(this._container, {
      format: "png",
      result: "file"
    });

    let saveResult = await CameraRoll.saveToCameraRoll(result, "photo");
    this.props.navigation.goBack();
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false,
      aspect: [4, 3]
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    } else {
      this.props.navigation.goBack();
    }
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
    backgroundColor: 'transparent',
    borderRadius: 30,
    overflow: 'hidden'
  },
  roundedButton: {
    borderRadius: 30,
    padding: 10,
    backgroundColor: Colors.psycheCoral,
    alignItems: 'center'
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
  }
});
