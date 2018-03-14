import React from "react";
import { View, Button, Image, StyleSheet, CameraRoll } from "react-native";
import { StackNavigator } from "react-navigation";
import { ImagePicker, BlurView, takeSnapshotAsync } from "expo";

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
        {!image && (
          <Button
            title="Pick an image from camera roll"
            onPress={this._pickImage}
          />
        )}
        {image && (
          <View style={{ flex: 1 }}>
            <View
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
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: 64 + Expo.Constants.statusBarHeight,
                  bottom: 0,
                  width: undefined,
                  height: undefined,
                  alignSelf: "stretch"
                }}
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
            <BlurView tint="dark" intensity={50} style={styles.blurredView}>
              <Button
                style={{ width: 96, height: 96 }}
                title="Cancel"
                onPress={() => this.props.navigation.goBack()}
              />
              <Button
                style={{ width: 96, height: 96 }}
                title="Done"
                onPress={() => this._saveImage()}
              />
            </BlurView>
          </View>
        )}
      </View>
    );
  }

  _saveImage = async () => {
    let result = await takeSnapshotAsync(this._container, {
      format: "png",
      result: "file"
    });

    let saveResult = await CameraRoll.saveToCameraRoll(result, "photo");
    console.log(saveResult);
    this.setState({ cameraRollUri: saveResult });
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
    alignItems: "center"
  }
});
