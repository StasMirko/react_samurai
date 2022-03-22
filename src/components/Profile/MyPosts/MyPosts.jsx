import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css';

const MyPosts = (props) => {
    const messages = props.postsData.map(value => <Post message={value.message} likeCount={value.likeCount}/>)

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
