import React from 'react'
import { Link } from 'react-router-dom';
import chatRooms from '../data/chatRooms';

const ChatSelector = () => {
    return (
        <div className=''>
            <h3 className='flex justify-center'>Have an Interest? Pick a Chatroom!</h3>
            <div className='flex justify-center'>
                <div className='grid grid-cols-2 gap-5 p-10 place-content-center '>
                    {chatRooms.map((room) => (
                        <div key={room.id} >
                            <h3  id={room.id} >
                                <Link className='p-3 bg-sky-700 rounded-md flex justify-center items-center hover:scale-[1.02] font-bold h-[200px] w-[200px] transition ease-in-out duration-300' to={`/room/${room.id}`}>{room.title}</Link>
                            </h3>
                            </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ChatSelector
