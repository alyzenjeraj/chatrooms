import React from 'react'
import { Link } from 'react-router-dom';
import chatRooms from '../data/chatRooms';

const ChatSelector = () => {
    return (
        <div>
            SELECTor
            <div>
                {chatRooms.map((room) => (
                    <h3 id={room.id}>
                        <Link to={`/room/${room.id}`}>{room.title}</Link>
                    </h3>
                ))}
            </div>
        </div>
    )
}

export default ChatSelector
