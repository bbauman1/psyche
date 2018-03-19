import React from 'react';
import { StyleSheet, View, Text, WebView, Dimensions } from 'react-native';
import * as Layout from '../constants/Layout';

export default class SocialWindow extends React.Component {
    constructor(props) {
        super(props);
    }

    SocialWindow = (props) => {
        return (
            <WebView
                source = {{uri: props.uri}}
                style = {[styles.socialWindow]}
                onNavigationStateChange={this._onNavigationStateChange.bind(this)}
                // onLoad = {this.onLoad.bind(this)}
                // onShouldStartLoadWithRequest={this._onShouldStartLoadWithRequest}
                // onNavigationStateChange = {this._onShouldStartLoadWithRequest} 
            />
        );
    }

    _onNavigationStateChange(webViewState){
        console.log(webViewState.url)
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