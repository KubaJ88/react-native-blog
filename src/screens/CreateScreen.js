import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import {View, Text,StyleSheet, TextInput, Button } from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';

const CreateScreen = ({navigation}) => {
    // navigation.getParam('id')
  
    
    const {addBlogPost} = useContext(Context)

    // const navigation = useNavigation();

    return <BlogPostForm onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate('Index'))
    }}/>
    
};


const styles = StyleSheet.create({
   
});

export default CreateScreen;
