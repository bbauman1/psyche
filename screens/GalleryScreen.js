import React from "react";
import { ScrollView, StyleSheet, Text, Image, View, TouchableHighlight, Button, Alert, Dimensions } from "react-native";
/*Reference https://projects.invisionapp.com/share/47EEC5Z5U#/screens/262903252 */
export default class GalleryScreen extends React.Component
{
	static navigationOptions = {
	title: "Gallery"
	};
	
	constructor(props)
	{
		super(props);
		this.state = {mediaShown : -1}
		
		base = 'http://nasa.aaronb.us/';
		
		files = [];
		files[0] = '1.jpg';
		files[1] = '2.jpg';
		files[2] = '3.jpg';
		files[3] = '4.jpg';
		//We will finish getting index.txt later
		
		const square = Dimensions.get('window').width/3;
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
	selectCallback = (data) => {
		console.log(data);
	}
	render() {
		
		//this.files.map( (fileName) => {return <MediaContainer key = {fileName} width = {square} uriMedia = {this.base + fileName}/>});
		if(this.state.mediaShown === -1)
		{
		return (
				<ScrollView style = {styles.container}>
					<View>
					{this.rows}
					</View>
					</ScrollView>
				)
		}
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
		Alert.alert("Open " + this.props.uriMedia);
		this.props.callback(this.props.uriMedia);
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

const styles = StyleSheet.create({
								 container: {
								 flex: 1,
								 flexDirection: 'column'
								 }
								 });
