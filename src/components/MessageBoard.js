import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import chatRooms from '../data/chatRooms';
import { getCollections } from '../services/firebase';
import MessageInput from './MessageInput';
import MessageList from './MessageList';

const MessageBoard = ({ rooms }) => {

    const params = useParams();
    const [currentId, setCurrentId] = useState(null)

    
      

    const room = rooms.find((x) => x.colURL === params.id)
    

    if(!room) console.log('ERROR ROOM NOT FOUND')

    return (
        <div className=''>
            <h2 className='font-bold flex justify-center text-xl'>{room.colName}</h2>
            <div>
                <Link className='p-2 flex justify-center' to='/'>⬅️ To Chat Selection</Link>
            </div>
            <div className='mt-3 flex justify-center h-screen'>
                <div className='w-2/3 max-w-lg outline rounded-md h-2/3'>
                    <MessageList setCurrentId={setCurrentId} roomId={room.colURL} />
                    <MessageInput currentId={currentId} setCurrentId={setCurrentId} roomId={room.colURL} />
                </div>
                
            </div>
        </div>
    )
}

export default MessageBoard
