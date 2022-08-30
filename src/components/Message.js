import React from 'react'
import ContextMenu from './ContextMenu';

const Message = ({message, isOwnMessage}) => {
    const {displayName, text } = message;
    return (
        <li className={`flex ${isOwnMessage ? 'justify-end' : ''}`}>
            <div className={`p-2 px-5 m-3 rounded-md ${isOwnMessage ? 'bg-sky-500 justfiy-end text-right self-end' : 'bg-slate-500'}`}>
            
            {/* {isOwnMessage && <ContextMenu className='flex justify-start' /> } */}
                <h4 className='text-md font-semibold '>{isOwnMessage ? 'You' : displayName}</h4>
                <div>{text}</div>
            </div>
        </li>
        
    )
}

export default Message
