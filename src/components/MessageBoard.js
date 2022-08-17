import React from 'react'
import { Link, useParams } from 'react-router-dom'
import chatRooms from '../data/chatRooms';

const MessageBoard = () => {

    const params = useParams();

    const room = chatRooms.find((x) => x.id === params.id)

    if(!room) console.log('ERROR ROOM NOT FOUND')

    return (
        <div>
            <h2>{room.title}</h2>
            <div>
                <Link to='/'>⬅️</Link>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default MessageBoard
