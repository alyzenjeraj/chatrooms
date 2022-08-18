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

    return (
        <div ref={containerRef}>
            {messages.map((message) => (
                <Message className='' key={message.id} message={message} isOwnMessage={message.uid === user.uid} />
            ))}
        </div>
    )
}

export default MessageList
