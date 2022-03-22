import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    const dialogs = props.dialogData.map(value => <DialogItem name={ value.name } id={ value.id }/>);
    const messages = props.messagesData.map(value => <Message message={ value.message }/>)

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
