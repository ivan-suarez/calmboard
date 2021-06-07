import React from 'react';
import Post from './Post';
import "./Feed.css"

function Feed(){
    return(
        
        <div class="feed">
            <Post 
            name="Ivan"
            date="06/07/21(Mon)"
            hour="04:12:21"
            number="23234243324"
            text="heyyyy this is a post" />
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
}

export default Feed;