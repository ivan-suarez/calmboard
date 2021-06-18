import React, { useEffect, useState } from 'react';
import "./Post.css"
import axios from "./axios";

function Post({name, date, hour, number, text}){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get("/posts");
            
            setPosts(req.data);
        }

        fetchData();
    }, []);
    /** I don't know if this works... */


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