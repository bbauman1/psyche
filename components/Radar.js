import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { DangerZone } from "expo";
const { Lottie } = DangerZone;

export class Radar extends React.Component {
  state = {
    animation: null
  };

  componentWillMount() {
    this._playAnimation();
  }

  render() {
    return (
      <View style={styles.animationContainer}>
        {this.state.animation && (
          <Lottie
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              width: 30,
              height: 30
            }}
            source={this.state.animation}
          />
        )}
      </View>
    );
  }

  _playAnimation = () => {
    if (!this.state.animation) {
      this._loadAnimationAsync();
    } else {
      this.animation.reset();
      this.animation.play();
    }
  };

  repeat_animation = setInterval(this._playAnimation, 1000);

  _loadAnimationAsync = async () => {
    let result = await fetch("https://api.myjson.com/bins/itgnf");

    this.setState(
      { animation: JSON.parse(result._bodyText) },
      this._playAnimation
    );
  };
}

const styles = StyleSheet.create({
  animationContainer: {
    left: "30%",
    flex: 1,
    position: "absolute",
    backgroundColor: "white"
  }
});
