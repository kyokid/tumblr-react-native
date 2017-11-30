import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TEST_DATA from './testdb.json'
import TumblrList from './TumblrList'

const apiKey = 'hGp9r890CuKRTsGm7xGszgce1fBYr7bxm8mvfCtIHdXqFX8MC9'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    console.warn(TEST_DATA.response.posts)
    this.state = {
      posts: TEST_DATA.response.posts
    }
  }
  render() {
    return (
      <TumblrList posts={this.state.posts} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
