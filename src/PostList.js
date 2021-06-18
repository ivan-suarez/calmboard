import React from "react";
import axios from 'axios';

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
            <div>
                <p>Prueba</p>
                {this.state.posts.map(post => <span>{post.text}</span>)}
            </div>
        )
    }
        
}