//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import TumblrPost from './TumblrPost'

// create a component
class TumblrList extends Component {
    render() {
        return (
            <FlatList
                data={this.props.posts}
                keyExtractor={(post) => post.id}
                renderItem={(postItem) => {
                    return <TumblrPost photos={postItem.item.photos}/>
                }}
            />
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default TumblrList;
