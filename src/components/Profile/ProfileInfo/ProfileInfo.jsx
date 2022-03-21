import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src='https://images.unsplash.com/photo-1545161296-d9c2c241f2ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80'/>
            </div>
            <div className={s.avaBlock}>AVA + Descr</div>
        </div>
    )
}

export default ProfileInfo;
