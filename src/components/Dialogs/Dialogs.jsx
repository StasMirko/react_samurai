import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={ s.dialogs }>
            <div className={ s.dialogsItems }>
                <div className={ s.dialog }>Eren</div>
                <div className={ s.dialog + ' ' + s.active}>Mikassa</div>
                <div className={ s.dialog }>Levi</div>
                <div className={ s.dialog }>Ervin</div>
                <div className={ s.dialog }>Rayner</div>
            </div>
            <div className={ s.messages }>
                <div className={ s.message }>Hello!!</div>
                <div className={ s.message }>How are your?</div>
                <div className={ s.message }>Where do you live?</div>
            </div>
        </div>
    )
}

export default Dialogs;
