import React from "react";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div>
                <div>New posts</div>
                <textarea/>
                <button>add post</button>
            </div>
            <Post message = 'Hello World!!' likeCount ='2'/>
            <Post message = 'My name is Stas' likeCount ='3' />
            <Post message = 'I like React' likeCount ='4'/>
            <Post message = 'I also like Node.js'  likeCount ='5'/>
            <Post message = 'the end' likeCount ='6'/>
        </div>
    )
}

export default MyPosts;
