import React from 'react'
import { Link, useParams } from 'react-router-dom'
import chatRooms from '../data/chatRooms';
import MessageInput from './MessageInput';
import MessageList from './MessageList';

const MessageBoard = () => {

    const params = useParams();

    const room = chatRooms.find((x) => x.id === params.id)

    if(!room) console.log('ERROR ROOM NOT FOUND')

    return (
        <div className=''>
            <h2 className='font-bold flex justify-center text-xl'>{room.title}</h2>
            <div>
                <Link className='p-2 flex justify-center' to='/'>⬅️ To Chat Selection</Link>
            </div>
            <div className='mt-3 flex justify-center h-screen'>
                <div className='w-2/3 max-w-lg outline rounded-md h-2/3'>
                    <MessageList roomId={room.id} />
                    <MessageInput roomId={room.id} />
                </div>
                
            </div>
        </div>
    )
}

export default MessageBoard
