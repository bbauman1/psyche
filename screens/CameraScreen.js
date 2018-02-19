import React from "react";
import { View, Text, Button } from "react-native";
import { StackNavigator } from "react-navigation";

export default class CameraScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 30 }}>I'll be the camera eventually</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}
