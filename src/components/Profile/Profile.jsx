import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo className={ s.descriptionBlock }/>
            <MyPosts
                postsData={ props.postsData }
                addPost={ props.addPost }
                updateNewPostText={ props.updateNewPostText }
            />
        </div>
    )
}

export default Profile;
