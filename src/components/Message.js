import React from 'react'
import ContextMenu from './ContextMenu';
import EmojiMenu from './EmojiMenu';
import { SmileOutlined } from '@ant-design/icons'

const Message = ({message, isOwnMessage, setCurrentId, roomId}) => {
    const {displayName, text } = message;
    
    return (
        <li className={`flex ${isOwnMessage ? 'justify-end' : ''}`}>
            <div className={`p-2 px-5 m-3 rounded-md ${isOwnMessage ? 'bg-sky-500 justfiy-end text-right self-end ' : 'bg-slate-500'}`}>
            <div className='flex justify-between'>
            {isOwnMessage && !message.deleted && 
                <ContextMenu 
                    className='flex justify-start' 
                    setCurrentId={setCurrentId} 
                    messageId={message.id} 
                    roomId={roomId}
                />  }
                {isOwnMessage && <div />}
                    <h4 className={`flex text-md font-semibold justify-self-end`}>{isOwnMessage ? 'You' : displayName}</h4>
                    {!isOwnMessage && (
                        
                        <EmojiMenu roomId={roomId} message={message} className='p-3' />
                    )}
                </div>
                
                {message.deleted ? (
                    <div><i>This message was deleted.</i></div>
                ) : (
                    <div>{text}</div>
                )}

                
                
                
            </div>
        </li>
        
    )
}

export default Message
