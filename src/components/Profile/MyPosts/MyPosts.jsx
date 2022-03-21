import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css';

const MyPosts = () => {

    const messagesData = [
        { id: 1, message: 'Hello World!!', likeCount: '2' },
        { id: 2, message: 'My name is Stas', likeCount: '3' },
        { id: 3, message: 'I like React', likeCount: '4' },
        { id: 4, message: 'I also like Node.js', likeCount: '5' },
        { id: 5, message: 'the end', likeCount: '6' },
    ];

    const messages = messagesData.map(value => <Post message={value.message} likeCount={value.likeCount}/>)

    return (
        <div>
            <div className={s.postBlock}>
                <div>
                    <h3>New posts</h3>
                </div>
                <div>
                    <textarea/>
                </div>
                <div>
                    <button>add post</button>
                </div>
            </div>
            { messages }
        </div>
    )
}

export default MyPosts;
