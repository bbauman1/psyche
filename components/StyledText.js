import React from 'react';
import { Text, Platform } from 'react-native';

export class MonoText extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'space-mono' }]} />;
  }
}

export class PsycheText extends React.Component {
  render() {
    const font = Platform.OS === 'ios'
      ? 'Helvetica'
      : 'sans-serif';
    return <Text {...this.props} style={[this.props.style, { fontFamily: font }]} />;
  }
}