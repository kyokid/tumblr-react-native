//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { width } from 'window-size';

// create a component

// const img = { uri: this.props.photos[0].original_size.url }; 


class TumblrPost extends Component {
    render() {
        const img = { uri: this.props.photos[0].original_size.url }; 

        return (
            <View style={styles.container}>
                <Image style={styles.image} source={img} />
            </View>
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
    image: {
        width: 200,
        heigth: 150,
    }
});

//make this component available to the app
export default TumblrPost;
