import React from 'react';
import { StyleSheet, View, Text, WebView, Dimensions } from 'react-native';
import AppLink from 'react-native-app-link';
import * as Layout from '../constants/Layout';

class SocialWindow extends React.Component {
    _onNavigationStateChange(webViewState) {
        console.log(webViewState.url);
    }

    render() {
        return(
            <WebView
                source = {{uri: this.props.uri}}
                style = {[styles.socialWindow]}
                onNavigationStateChange={this._onNavigationStateChange.bind(this)}
            />
        )
    }
}


const styles = StyleSheet.create({
    socialWindow: {
        flex: 1,
        marginTop: 20,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
    }
})

export default SocialWindow;