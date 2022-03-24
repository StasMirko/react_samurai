import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css';

const MyPosts = (props) => {
    const messages = props.postsData.postsData.map(value => <Post message={value.message} likeCount={value.likeCount}/>)
    const newPostElement = React.createRef();
    const addPost = () => {
        props.addPost();
    }

    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <div className={s.postBlock}>
                <div>
                    <h3>New posts</h3>
                </div>
                <div>
                    <textarea onChange={ onPostChange } ref={ newPostElement } value={ props.postsData.newPostText } />
                </div>
                <div>
                    <button onClick={ addPost }>add post</button>
                </div>
            </div>
            { messages }
        </div>
    )
}

export default MyPosts;
