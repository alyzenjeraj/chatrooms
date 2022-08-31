import React, { useEffect, useState } from 'react'
import { getMessages } from '../services/firebase'


const useMessages = (roomId) => {
    console.log('its getting aclled')
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const unsubscribe = getMessages(roomId, setMessages)
        return unsubscribe;
        
    }, [roomId])


    console.log(messages)
    return messages;
}

export default useMessages
