import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { StackNavigator } from "react-navigation";
import { ImagePicker, BlurView } from "expo";

export default class CameraScreen extends React.Component {
  state = {
    image: null
  };

  static navigationOptions = {
    header: null
  };

  render() {
    let { image } = this.state;

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
          title="Pick an image from camera roll"
          onPress={this._pickImage}
        />
        {image && (
          <View>
            <Image
              source={{ uri: image }}
              style={{ width: 720, height: 720 }}
            />

            <BlurView tint="dark" intensity={100} style={styles.blurredView}>
              <Button
                style={{ width: 96, height: 96, color: "#fff" }}
                title="Cancel"
                onPress={() => this.props.navigation.goBack()}
              />
              <Button
                style={{ width: 96, height: 96, color: "#fff" }}
                title="Done"
                onPress={() => this.props.navigation.goBack()}
              />
            </BlurView>
          </View>
        )}
      </View>
    );
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
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
  },
  blurContainer: {
    flex: 1
  }
});
