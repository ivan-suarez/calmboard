import React from 'react';
import "./Post.css"

function Post(props){

    return(
        <div class="post">
            <div class="post__header">
                <p>{props.post.name} {props.post.date} {props.post.hour} No. {props.post.number}</p>
            </div>
            <div class="post__body">
                <p>{props.post.text}</p>
            </div> 
        </div>
    );
}

export default Post;