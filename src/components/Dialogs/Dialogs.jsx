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

    const dialogData = [
        { id: 1, name: 'Eren' },
        { id: 2, name: 'Mikassa' },
        { id: 3, name: 'Levi' },
        { id: 4, name: 'Ervin' },
        { id: 5, name: 'Rayner' },
    ];

    const dialogs = dialogData.map(value => <DialogItem name={ value.name } id={ value.id }/>);

    const messagesData = [
        { message: 'Hello!!' },
        { message: 'How are your?' },
        { message: 'Where do you live?' },
        { message: 'Who lives with you?' },
        { message: 'How much does it cost?' },
    ];

    const messages = messagesData.map(value => <Message message={ value.message }/>)

    return (
        <div className={ s.dialogs }>
            <div className={ s.dialogsItems }>
                { dialogs }
            </div>
            <div className={ s.messages }>
                { messages }
            </div>
        </div>
    )
}

export default Dialogs;
