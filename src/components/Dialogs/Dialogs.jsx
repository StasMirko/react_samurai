import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={ s.dialog }>
            <NavLink to={path}>{ props.name }</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={ s.message }>{ props.message }</div>
    )
}

const Dialogs = () => {
    let dialogItem = [
        { id: 1, name: 'Eren' },
        { id: 1, name: 'Mikassa' },
        { id: 1, name: 'Levi' },
        { id: 1, name: 'Ervin' },
        { id: 1, name: 'Rayner' },
    ];

    let messages = [
        { message: 'Hello!!' },
        { message: 'How are your?' },
        { message: 'Where do you live?' },
        { message: 'Who lives with you?' },
        { message: 'How much does it cost?' },
    ]
    return (
        <div className={ s.dialogs }>
            <div className={ s.dialogsItems }>
                <DialogItem name='Eren' id='1'/>
                <DialogItem name='Mikassa' id='2'/>
                <DialogItem name='Levi' id='3'/>
                <DialogItem name='Ervin' id='4'/>
                <DialogItem name='Rayner' id='5'/>
            </div>
            <div className={ s.messages }>
                <Message message='Hello!!'/>
                <Message message='How are your?'/>
                <Message message='Where do you live?'/>
                <Message message='Who lives with you?'/>
                <Message message='How much does it cost?'/>
            </div>
        </div>
    )
}

export default Dialogs;
