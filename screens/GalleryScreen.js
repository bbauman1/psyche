import React from "react";
import { ScrollView, StyleSheet, Text, Image, View, TouchableHighlight, Button, Alert, Dimensions } from "react-native";
import { StackNavigator } from "react-navigation"
import { Video } from "expo"
/*Reference https://projects.invisionapp.com/share/47EEC5Z5U#/screens/262903252 */
/* NOTE: Formatting will be taken care of soon! */
//Prettier - Code formatter
/*** GALLERY ***/
class Gallery extends React.Component {

	static navigationOptions = {
		header: null
	};

	constructor(props) {
		super(props);
		/*
		this.state = {
			mediaShown : "",
			mediaType: 0 //Media types: 0 is signal to show all gallery, 1 is for a picture, 2 is for a video
			}
		 */

		base = 'http://nasa.aaronb.us/';

		files = [];
		files[0] = { name: '1.jpg', mediaType: 'image' };
		files[1] = { name: '2.jpg', mediaType: 'image' };
		files[2] = { name: '3.jpg', mediaType: 'image' };
		files[3] = { name: '4.jpg', mediaType: 'image' };
		files[4] = { name: 'test.mov', mediaType: 'video' };
		//We will finish getting index.txt later
		this.width = Dimensions.get('window').width;
		this.height = Dimensions.get('window').height;
		const square = Math.floor(Dimensions.get('window').width / 3);
		this.rows = new Array(Math.ceil(files.length / 3));
		for (let i = 0; i < this.rows.length; i++) {
			row = [];
			for (let j = 0; j < 3 && i * 3 + j < files.length; j++) {
				let fileName = files[i * 3 + j].name;
				let mediaType = files[i * 3 + j].mediaType;
				row[j] = <MediaContainer key={fileName} width={square} uriMedia={base + fileName} mediaType={mediaType} callback={this.selectCallback} />;
			}
			this.rows[i] = <MediaRow key={i} frames={row} />
		}
	}
	/*
	galleryState = () => {
		this.setState({
					  mediaShown : "",
					  mediaType: 0 //Media types: 0 is signal to show all gallery, 1 is for a picture, 2 is for a video
					  });
	 
	}
	 */
	selectCallback = (data) => {
		//this.setState(data);
		const { navigate } = this.props.navigation;
		navigate('Media', data);
	}
	render() {
		return (
			<ScrollView style={styles.gallery}>
				{this.rows}
			</ScrollView>
		)
		//this.files.map( (fileName) => {return <MediaContainer key = {fileName} width = {square} uriMedia = {this.base + fileName}/>});
		/*
		if(this.state.mediaType === 0)
		{
		return (
				<ScrollView style = {styles.gallery}>
					{this.rows}
				</ScrollView>
				)
		}
		else if(this.state.mediaType === 1)
		{
			return (
				<View style = {{flex: 1}}>
					<Button onPress = {this.galleryState} title="Close"/>
					<Image source = {{uri: this.state.mediaShown}} style = {{flex: 1}} resizeMode = {"contain"}/>
				</View>
			 )
		}
		else
		{
			return <Text>Not implimented yet</Text>
		}
		 */
	}
}
class MediaRow extends React.Component {

	render() {
		return (
			<View style={{ flexDirection: 'row' }}>
				{this.props.frames}
			</View>
		)
	}
}
class MediaContainer extends React.Component {
	onPress = () => {
		//Alert.alert("Open " + this.props.uriMedia);
		//this.props.callback(this.props.uriMedia);
		this.props.callback({ mediaShown: this.props.uriMedia, mediaType: this.props.mediaType });
	}
	render() {//uriMedia at {{uri will be changed to PREVIEW version
		return (
			<TouchableHighlight onPress={this.onPress} underlayColor={"#fff"} style={{ alignItems: 'center' }}>
				<Image source={{ uri: this.props.uriMedia }} style={{ width: this.props.width, height: this.props.width, borderWidth: 1.0, borderColor: "#fff" }} />
			</TouchableHighlight>
		)
	}
}

/*** MEDIAINFOVIEWER ***/
class MediaInfoViewer extends React.Component {
	static navigationOptions = {
		header: null
	};
	constructor(props) {
		super(props);
		this.state = { loadingPicture: true };
		this.mediaURI = this.props.navigation.state.params.mediaShown;
		this.mediaType = this.props.navigation.state.params.mediaType;
	}

	doPress = () => {
		const { goBack } = this.props.navigation;
		goBack(null);
	}

	loadPicture = (width, height) => {
		this.width = width;
		this.height = height;
		this.setState({ loadingPicture: false });
	}

	render() {
		if (this.mediaType === 'image') {
			if (this.state.loadingPicture === true) {
				Image.getSize(this.mediaURI, this.loadPicture);
				return <Text>Loading...</Text>
			}
			else {
				let aspectRatio = this.width / this.height;
				let localWidth = Dimensions.get('window').width;
				return (
					<TouchableHighlight onPress={this.doPress}>
						<View style={{ flex: 1 }}>
							<Image source={{ uri: this.mediaURI }} style={{ width: localWidth, height: localWidth / aspectRatio }} />
						</View>
					</TouchableHighlight>
				)
			}
		}
		else if (this.mediaType === 'video') {
			return (

				<VideoWrapper mediaURI={this.mediaURI} />
			)
			/*
			 return ( <Video source={{uri: this.mediaURI}}   // Can be a URL or a local file.
			 ref={(ref) => {
			 this.player = ref
			 }}                                      // Store reference
			 rate={1.0}                              // 0 is paused, 1 is normal.
			 volume={1.0}                            // 0 is muted, 1 is normal.
			 muted={false}                           // Mutes the audio entirely.
			 paused={false}                          // Pauses playback entirely.
			 resizeMode="cover"                      // Fill the whole screen at aspect ratio.*
			 repeat={true}                           // Repeat forever.
			 playInBackground={false}                // Audio continues to play when app entering background.
			 playWhenInactive={false}                // [iOS] Video continues to play when control or notification center are shown.
			 ignoreSilentSwitch={"ignore"}           // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
			 progressUpdateInterval={250.0}          // [iOS] Interval to fire onProgress (default to ~250ms)
			 onLoadStart={this.loadStart}            // Callback when video starts to load
			 onLoad={this.setDuration}               // Callback when video loads
			 onProgress={this.setTime}               // Callback every ~250ms with currentTime
			 onEnd={this.onEnd}                      // Callback when playback finishes
			 onError={this.videoError}               // Callback when video cannot be loaded
			 onBuffer={this.onBuffer}                // Callback when remote video is buffering
			 onTimedMetadata={this.onTimedMetadata}  // Callback when the stream receive some metadata
			 style={styles.backgroundVideo} />
			 )
			 */
		}
		else {
			let msg = 'Type of media not supported';
			Alert.alert(msg);
			return <Text>{msg}</Text>
		}
	}
}

/*** Video Wrapper ***/
class VideoWrapper extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const temp = () => { }
		return (<Video source={{ uri: 'http://nasa.aaronb.us/test.mov' }}
			ref={(ref) => {
				this.player = ref
			}}
			rate={1.0}
			volume={1.0}
			muted={false}
			paused={false}
			resizeMode={"cover"}
			repeat={true}
			playInBackground={false}
			playWhenInactive={false}
			ignoreSilentSwitch={"ignore"}
			progressUpdateInterval={250.0}
			onLoadStart={temp}
			onLoad={temp}
			onProgress={temp}
			onEnd={temp}
			onError={temp}
			onBuffer={temp}
			onTimedMetadata={temp}
			style={styles.backgroundVideo} />
		)
	}
}

/*** GLOBAL SCREEN ***/
const LocalPageNavigator = StackNavigator(
	{
		Main: {
			screen: Gallery
		},
		Media: {
			screen: MediaInfoViewer
		}
	},
	{
		headerMode: 'screen'
	}
)

export default class GalleryScreen extends React.Component {
	static navigationOptions = {
		title: "Gallery"
	};

	render() {
		return <LocalPageNavigator />
	}
}

const styles = StyleSheet.create({
	gallery: {
		flex: 1,
		flexDirection: 'column'
	},
	backgroundVideo: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},
});
