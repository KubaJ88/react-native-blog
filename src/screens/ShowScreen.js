import React, { useContext } from 'react';
import {View, Text,StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

const ShowScreen = ({route}) => {
    // navigation.getParam('id')
    const id = route.params.id

    const {state} = useContext(Context)

    const blogPost = state.find((blogPost) => blogPost.id === id)

    // console.log(id)

    return ( <View>
        <Text>{blogPost.title}</Text>
        <Text>{blogPost.content}</Text>
    </View>

    );
};


const styles = StyleSheet.create({});

export default ShowScreen;
