import React, { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'
import { sendMessage, updateMessage } from '../services/firebase'
import useMessages from '../hooks/useMessages'

const MessageInput = ({ roomId, currentId, setCurrentId }) => {

    const { user } = useAuth();
    const [value, setValue] = useState('')
    const messages = useMessages(roomId)

    // if(currentId) {
    //     const message = messages.find((m) => m.id === currentId) : null
    //     setValue(messages.find((m) => m.id === currentId))
    // }
    const message = currentId ? messages.find((m) => m.id === currentId).text : null
    
    

    useEffect(() => {
        if(message) setValue(message)
    }, [message])

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId) {
            updateMessage(roomId, currentId, value)
            setCurrentId(null)
            setValue('')
            
        } else {
            sendMessage(roomId, user, value);
            setValue('')
        }
        
    }

    return (
        <form onSubmit={handleSubmit} className='mt-3'>
            <input 
                className='w-3/4  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 bg-transparent
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 m-1 ' 
                type='text' 
                placeholder='Enter Your Message' 
                value={value} 
                onChange={handleChange} 
                required 
                minLength={1} 
                
            />
            <button 
                className='cursor-pointer w-1/5  p-1 rounded-md bg-sky-500 hover:scale-[1.02] transition ease-in-out duration-300' 
                type='submit' 
                disabled={value < 1}>Send</button>
        </form>
    )
}

export default MessageInput
