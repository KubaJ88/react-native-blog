import React, { useContext, useEffect } from 'react';
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';






const IndexScreen = () => {

    // console.log(props)
    const navigation = useNavigation();
    const {state, deleteBlogPost, getBlogPosts} = useContext(Context);


    useEffect(() => {
        getBlogPosts();

    const listner = navigation.addListener('didFocus', () => {
            getBlogPosts()
        });

        return () => {
            navigation.removeListener('didFocus')
        };
    }, [])
    

    return <View>
        {/* <Button title={'Add Blog Post'} onPress={addBlogPost}/> */}
       <FlatList data={state}
       keyExtractor={(blogPost) => blogPost.title }
       renderItem={({item}) => {
           return (
            <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
           <View style={styles.row}>
           <Text style={styles.title} >{item.title}</Text>
           <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
           <Feather name='trash' style={styles.icon}/>
           </TouchableOpacity>

           </View>
           </TouchableOpacity>)
       }}
       />
    </View>
};




const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: 'gray'
    
        
        
        
        
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});

export default IndexScreen;