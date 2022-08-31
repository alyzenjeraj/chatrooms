import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import chatRooms from '../data/chatRooms';
import { PlusOutlined } from '@ant-design/icons';
import Modal from './Modal/Modal';
import { AnimatePresence } from 'framer-motion';
import useCollections from '../hooks/useCollections';
import { getCollections } from '../services/firebase';


import ModalCollection from './ModalCollection'

const ChatSelector = ({ rooms, setColl, coll }) => {

    

    const [searchTerm, setSearchTerm] = useState('')
    const [modalIsOpen, setModalIsOpen] = useState(false)
    
    

    const openModal = () => {
        setModalIsOpen(true)
    }


    const closeModal = () => {
        setModalIsOpen(false)
        
    }


    return (
        <div className='flex flex-col justify-center'>
            <h3 className='flex justify-center'>Have an Interest? Pick a Chatroom or create your own!</h3>

            {/* <input className='w-1/2  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 bg-transparent
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 m-auto mt-3 ' 
                type='text' 
                placeholder='Search for a Chatroom' 
                value={searchTerm} 
                onChange={handleChange} 
                required 
                minLength={1} 
                
            /> */}

            <div className='flex justify-center'>
                <div className='grid grid-cols-2 gap-5 p-10 place-content-center '>
                    <div>
                            <PlusOutlined 
                                onClick={() => (modalIsOpen ? closeModal() : openModal())} 
                                className='cursor-pointer p-3 bg-sky-700 rounded-md flex justify-center items-center hover:scale-[1.02] font-bold h-[200px] w-[200px] transition ease-in-out duration-300 text-3xl' />   
                    </div>
                    {/* {chatRooms.map((room) => (
                        <div key={room.colURL} >
                            <h3  id={room.colURL} >
                                <Link className='p-3 bg-sky-700 rounded-md flex justify-center items-center hover:scale-[1.02] font-bold h-[200px] w-[200px] transition ease-in-out duration-300' to={`/room/${room.colURL}`}>{room.colName}</Link>
                            </h3>
                        </div>
                    ))} */}
                    {rooms?.map((room) => (
                        <div key={room.id} >
                            <h3  id={room.id} >
                                <Link className='p-3 bg-sky-700 rounded-md flex justify-center items-center hover:scale-[1.02] font-bold h-[200px] w-[200px] transition ease-in-out duration-300' to={`/room/${room.colURL}`}>{room.colName} {room?.colEmoji}</Link>
                            </h3>
                        </div>
                        
                    ))}

                    
                </div>
            </div>
            <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                wait={() => null}
            >
                {modalIsOpen && <Modal setColl={setColl} coll={coll} modalIsOpen={modalIsOpen} handleClose={closeModal} />}
            </AnimatePresence>

            

        </div>
    )
}

export default ChatSelector
