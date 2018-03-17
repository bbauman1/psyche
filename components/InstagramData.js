import React from "react";
import { StyleSheet, View, Text, WebView, Dimensions } from "react-native";
import {
  Content,
  Card,
  CardItem,
  Body,
  Thumbnail,
  Left,
  Icon,
  Right
} from "native-base";

export default class InstagramData extends React.Component {
  render() {
    let posts = this.props.feedData.map(function(postData, index) {
      return (
        <Card>
          <CardItem>
            <Image
              source={{ uri: postData.display_src }}
              style={[styles.socialWindow]}
            />
          </CardItem>
          <CardItem>
            <Left>
              <Icon name="heart" style={{ color: "white" }} />
              <Text>{postData.likes.count} </Text>
            </Left>
            <Right>
                <Icon name="chatbubbles" style={{color: "white"}}/>
                <Text>{postData.comments.count}</Text>
            </Right>
          </CardItem>
          <CardItem>
            <Left>
              <Body>
                <Text>{postData.caption}</Text>
              </Body>
            </Left>
          </CardItem>
          {/* <CardItem content>
            <Text> {postData.</Text>
          </CardItem> */}
        </Card>
      );
    });
    return <Content>{posts}</Content>;
  }
}

const styles = StyleSheet.create({
  feedImage: {
    flex: 1,
    width: null,
    height: 175
  }
});
