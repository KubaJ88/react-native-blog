import React, { useContext, useState, useReducer } from 'react';
import jsonServer from '../api/jsonServer';
import createDataContext from './createDataContext';


// const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch(action.type) {
        case 'get_blogposts':
            return action.payload;
        case 'add_blogpost':
            return [...state, {
                id: Math.floor(Math.random() * 99999),
                title: action.payload.title,
                content: action.payload.content
            }];
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload)
        case 'edit_blogpost':
            return state.map((blogPost) => {
                return (blogPost.id === action.payload.id) 
                ? action.payload : blogPost
            });
        default:
            return state;
    }
}


const getBlogPosts = dispatch => {
    return async () => {
        const response = await jsonServer.get('/blogposts');

        dispatch({type: 'get_blogposts', payload: response.data})
    }
}

const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {    
    // dispatch({type: 'add_blogpost', payload: {title, content}});
    if(callback) {
        callback()
        }
    

        await jsonServer.post('/blogposts', {title,content})


        };
}


const deleteBlogPost = dispatch => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`);
        dispatch({type: 'delete_blogpost', payload: id})
    }
}

const editBlogPost = dispatch => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}`, {title, content})

        dispatch({type: 'edit_blogpost', payload: {id, title, content }});
        if(callback) {
        callback()
        }

    }
}



export const {Context, Provider} = createDataContext(blogReducer, {addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts}, []);