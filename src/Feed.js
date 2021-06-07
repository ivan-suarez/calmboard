import React from 'react';
import Post from './Post';
import "./Feed.css"

function Feed(){
    return(
        <div class="feed">
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
}

export default Feed;