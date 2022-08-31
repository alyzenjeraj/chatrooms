import React, { useRef, useLayoutEffect } from 'react'
import useAuth from '../hooks/useAuth'
import useMessages from '../hooks/useMessages'
import Message from './Message'
import { motion } from 'framer-motion'


const MessageList = ({roomId, setCurrentId}) => {
    const containerRef = useRef(null)
    const { user } = useAuth();
    console.log(roomId)
    const messages = useMessages(roomId)

    useLayoutEffect(() => {
        if(containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
        
    })
    

    return (
        <div className='overflow-auto h-full scrollbar' ref={containerRef}>
            <ul className=''>

            <motion.div
                            whileInView={{opacity: [0,1], x: [-150,0]}}
                            transition={{duration: 0.5, staggerChildren: 0.5}}
                            
                        >
                {messages.length === 0 ? 
                    (<h3 className='flex justify-center mt-12 text-slate-400' >This is the begining of the Chat! Have Fun!</h3>) 
                    : 
                    (messages.map((message) => (
                        
                            <Message 
                                className='' 
                                key={message.id} 
                                message={message} 
                                isOwnMessage={message.uid === user.uid} 
                                setCurrentId={setCurrentId}
                                roomId={roomId}
                                
                            />
                        
                        
                        
                )))}

                </motion.div>
                
            </ul>
            
        </div>
    )
}

export default MessageList
