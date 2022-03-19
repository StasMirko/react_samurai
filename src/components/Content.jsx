import React from 'react';
import s from './Content.module.css';

const Content = () => {
    return (
        <div className={ s.content }>
            <div>
                <img src='https://images.unsplash.com/photo-1545161296-d9c2c241f2ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80'/>
            </div>
            <div>AVA + Descr</div>
            <div>
                <div>New posts</div>
            </div>
            <div>
                <div className={ s.item }>Post 1</div>
                <div className={ s.item }>Post 2</div>
                <div className={ s.item }>Post 3</div>
            </div>
        </div>
    )
}

export default Content;
