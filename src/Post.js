import React from 'react';
import "./Post.css"

function Post({name, date, hour, number, text}){
    return(
        <div class="post">
            <div class="post__header">
                <p>{name} {date} {hour} No. {number}</p>
            </div>
            <div class="post__body">
                <p>{text}</p>
            </div> 
        </div>
    );
}

export default Post;