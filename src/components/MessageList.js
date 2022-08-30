import React, { useRef, useLayoutEffect } from 'react'
import useAuth from '../hooks/useAuth'
import useMessages from '../hooks/useMessages'
import Message from './Message'


const MessageList = ({roomId}) => {
    const containerRef = useRef(null)
    const { user } = useAuth();
    const messages = useMessages(roomId)

    useLayoutEffect(() => {
        if(containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
        
    })
    console.log(messages.length)

    return (
        <div className='overflow-auto h-full scrollbar' ref={containerRef}>
            <ul className=''>
                {messages.length === 0 ? 
                    (<h3 className='flex justify-center mt-12 text-slate-400' >This is the begining of the Chat! Have Fun!</h3>) 
                    : 
                    (messages.map((message) => (
                        <Message 
                            className='' 
                            key={message.id} 
                            message={message} 
                            isOwnMessage={message.uid === user.uid} 
                            
                        />
                )))}
                
            </ul>
            
        </div>
    )
}

export default MessageList
