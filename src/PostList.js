import React from "react";
import axios from 'axios';
import Post from './Post'
import './PostList.css'

export default class PostList extends React.Component{
    state = {posts: []}
    
    componentDidMount(){
        axios.get("http://localhost:8001/posts").then(
            res => {
                const posts = res.data
                this.setState({posts});
            })
    }

    render(){
        return (
            /** {this.state.posts.map(post => <span>{post.text}</span>)}*/
            
            <div class="postlist">
                <h1 class="title">Calmboard</h1>
                {this.state.posts.map(post => <Post post={post}/>)}
                
            </div>
        )
    }
        
}