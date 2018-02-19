import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class TimelineScreen extends React.Component {
  constructor() {
    super()
  }

  static navigationOptions = {
    title: "Timeline"
  };

  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: "#FFFFFF",
  },
});
