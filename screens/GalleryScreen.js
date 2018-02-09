import React from "react";
import { ScrollView, StyleSheet, Text, Image, View, TouchableHighlight, Button, Alert, Dimensions } from "react-native";
import { StackNavigator } from "react-navigation"
/*Reference https://projects.invisionapp.com/share/47EEC5Z5U#/screens/262903252 */
/* NOTE: Formatting will be taken care of soon! */

/*** GALLERY ***/
class Gallery extends React.Component
{

	static navigationOptions = {
	header: null
	};
	
	constructor(props)
	{
		super(props);
		/*
		this.state = {
			mediaShown : "",
			mediaType: 0 //Media types: 0 is signal to show all gallery, 1 is for a picture, 2 is for a video
			}
		 */
		
		base = 'http://nasa.aaronb.us/';
		
		files = [];
		files[0] = '1.jpg';
		files[1] = '2.jpg';
		files[2] = '3.jpg';
		files[3] = '4.jpg';
		//We will finish getting index.txt later
		this.width = Dimensions.get('window').width;
		this.height = Dimensions.get('window').height;
		const square = Math.floor(Dimensions.get('window').width/3);
		this.rows = new Array(Math.ceil(files.length / 3));
		for (let i = 0; i < this.rows.length;i++)
		{
			row = [];
			for(let j = 0; j < 3 && i*3 + j < files.length;j++)
			{
				let fileName = files[i*3 + j];
				row[j] = <MediaContainer key = {fileName} width = {square} uriMedia = {base + fileName} callback = {this.selectCallback}/>;
			}
			this.rows[i] = <MediaRow key = {i} frames = {row}/>
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
		const {navigate} = this.props.navigation;
		navigate('Media',data);
	}
	render() {
		return (
				<ScrollView style = {styles.gallery}>
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
class MediaRow extends React.Component
{
	
	render()
	{
		return (
		<View style = {{flexDirection: 'row'}}>
				{this.props.frames}
		</View>
				)
	}
}
class MediaContainer extends React.Component
{
	onPress = () => {
		//Alert.alert("Open " + this.props.uriMedia);
		//this.props.callback(this.props.uriMedia);
		this.props.callback({mediaShown: this.props.uriMedia, mediaType: 1});//TEST only type 1 right now
	}
	render()
	{
		return (
				<TouchableHighlight onPress={this.onPress} underlayColor = {"#fff"} style = {{alignItems: 'center'}}>
					<Image source = {{uri: this.props.uriMedia}} style = {{width:this.props.width, height:this.props.width, borderWidth: 1.0, borderColor: "#fff"}} />
				</TouchableHighlight>
				)
	}
}

/*** MEDIAINFOVIEWER ***/
class MediaInfoViewer extends React.Component
{
	static navigationOptions = {
	header: null
	};
	constructor(props)
	{
		super(props);
		this.state = {loadingPicture: true};
		this.imgURI = this.props.navigation.state.params.mediaShown;
		
	}
	
	doPress = () =>
	{
		const {goBack} = this.props.navigation;
		goBack(null);
	}
	
	loadPicture = (width, height) =>
	{
		this.width = width;
		this.height = height;
		this.setState({loadingPicture: false});
	}
	
	render()
	{
		
		if(this.state.loadingPicture === true)
		{
			Image.getSize(this.imgURI, this.loadPicture);
			return <Text>Loading...</Text>
		}
		else
		{
			let aspectRatio = this.width / this.height;
			let localWidth = Dimensions.get('window').width;
			return (
			<TouchableHighlight onPress = {this.doPress}>
				<View style={{flex:1}}>
					<Image source = {{uri: this.imgURI}} style = {{width: localWidth, height: localWidth/aspectRatio}}/>
				</View>
			</TouchableHighlight>
					)
		}
	}
}

/*** GLOBAL SCREEN ***/
const LocalPageNavigator = StackNavigator(
	  {
	  Main:{
	  screen: Gallery
	  },
	  Media:{
	  screen: MediaInfoViewer
	  }
	  },
	  {
	  headerMode: 'screen'
	  }
	  )

export default class GalleryScreen extends React.Component
{
	static navigationOptions = {
	title: "Gallery"
	};
	
	render()
	{
		return <LocalPageNavigator/>
	}
}

const styles = StyleSheet.create({
			 gallery: {
			 flex: 1,
			 flexDirection: 'column'
			 }
			 },
			);
