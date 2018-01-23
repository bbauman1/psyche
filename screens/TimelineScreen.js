import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo';
import Timeline from 'react-native-timeline-listview'

export default class TimelineScreen extends React.Component {
  constructor() {
    super()
    this.data = [
      { time: '2022', title: 'Launch', description: 'Launch of Psyche spacecraft from NASA’s Kennedy Space Center, FL' },
      { time: '2023', title: 'Mars', description: 'Psyche spacecraft flyby of Mars' },
      { time: '2026', title: 'Reaches Orbit', description: 'Psyche spacecraft arrives in asteroid’s orbit' },
      { time: '2027', title: 'Gathers Data From Orbit', description: 'Psyche spacecraft orbits the Psyche asteroid for 21 months' }
    ]
  }

  static navigationOptions = {
    title: "Timeline"
  };

  render() {
    return (
      <View style={styles.container}>
        <Timeline
          style={styles.list}
          data={this.data}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
