import React from 'react';
import s from './Post.module.css'

const Post = () => {
    return (
        <div>
            <div className={ s.item }>
                <img src='https://cdn.anime-planet.com/characters/primary/eren-jaeger-1-190x266.jpg?t=1625972790'/>
                Post 1
                <div>
                    <span>Like</span>
                </div>
                <br/>
            </div>
        </div>
    )
}

export default Post;
