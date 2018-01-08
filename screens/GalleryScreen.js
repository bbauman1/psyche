import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default class GalleryScreen extends React.Component {
  static navigationOptions = {
    title: 'Gallery',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
