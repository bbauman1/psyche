import React from 'react';
import { Text,View,StyleSheet,Image,Dimensions,FlatList } from 'react-native'
import { Constants, AppLoading } from 'expo'

export default class InstagramComponent extends React.Component {

  instagramState = {
    loaded: false,
    feedData: null,
    comments: []
  };

  componentDidMount() {
    this.fetchInstagramFeed();
  }

  async fetchInstagramFeed() {
    let response = await fetch (
      'https://www.instagram.com/nasapsyche/?__a=1'
    )

    let posts = await response.json();
    let comments = await this.makeCommentList(posts.feedData);

    this.setState({
      loaded: true,
      feedData: posts.data
      comments: comments
    })
  };

  async makeCommentList(posts) {
    let postsArray = posts.map(async (post) => {
      let postId = post.id
      if(post.comments.count === 0) {
        return (
          <View style = {styles.comment} key = {postId}>
            <Text>No Comments!</Text>
          </View>
        )
      } else {
        let response = await fetch {
          
        }
      }
    })
  }
  render() {
    return (
      <View style = {styles.instagramFeed}>
        <FlatList
          data = {this.instagramState.feedData}
          renderItem = {({item, index}) = > this.createInstagramPost(item, index)}
          keyExtractor = {(item) => item.id}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  instagramFeed: {
    flex: 1,
    marginTop: 20,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
})