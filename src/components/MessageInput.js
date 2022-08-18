import React, { useState } from 'react'
import useAuth from '../hooks/useAuth'
import { sendMessage } from '../services/firebase'

const MessageInput = ({ roomId }) => {

    const { user } = useAuth();
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendMessage(roomId, user, value);
        setValue('')
    }

    return (
        <form onSubmit={handleSubmit} className=''>
            <input className='w-3/4  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 bg-transparent
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 m-1 ' type='text' placeholder='Enter Your Message' value={value} onChange={handleChange} required minLength={1} />
            <button className='w-1/5  p-1 rounded-md bg-sky-500 hover:scale-[1.02]' type='submit' disabled={value < 1}>Send</button>
        </form>
    )
}

export default MessageInput
