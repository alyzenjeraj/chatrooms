import { motion } from "framer-motion";
import Backdrop from "./Backdrop";  
import { CloseOutlined } from '@ant-design/icons'
import _ from "lodash";
import { useNavigate } from "react-router";

import React, { useState } from 'react'
import { addCollection } from "../../services/firebase";
import useCollections from "../../hooks/useCollections";


const Modal = ({ handleClose, text, setColl, coll }) => {
    const navigate = useNavigate();

    const [collection, setCollection] = useState({
        name: '',
        url: '',
        emoji: ''
    })
    
    const [nameTaken, setNameTaken] = useState(false)

    const handleChange = (e) => {
        setCollection(e.target.value)
    }

    const verifyKey = (e) => {
        var key = e.keyCode;
        return ((key >= 65 && key <= 90) || key === 8);
    }

    const handleSubmit= (e) => {
        e.preventDefault();
        addCollection(collection)
        setColl(coll+1)
        handleClose();
        // navigate(`/room/${collection.url}`)
    }

    

    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className='bg-sky-700 w-3/4 h-1/6 m-auto px-2 rounded-md items-center'
                initial={{y: '-100vh', opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{
                        duration: 0.1,
                        type: 'spring',
                        damping: 25,
                        stiffness: 500
                    }}
                exit={{y: '100vh', opacity: 0}}
                

            >
            
                <CloseOutlined className='text-xl p-2' onClick={handleClose} />
                <h1 className='text-center'>Enter your Collection name!</h1>
                

                <form onSubmit={handleSubmit} className='flex flex-col justify-center'>
                    <div className='flex flex-row gap-0'>
                        <input 
                            className=' flex-1 place-item-center w-1/2 mx-3 px-4 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 bg-transparent
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 m-auto mt-3' 
                            type='text' 
                            placeholder='Enter a chatroom name! (Only Letters)' 
                            value={collection.name} 
                            onChange={(e) => setCollection({...collection, name: e.target.value, url: _.kebabCase(e.target.value)})} 
                            required 
                            minLength={1} 
                            onKeyDown={verifyKey}
                        />

                        <input 
                            className='mr-3 place-item-center   px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 bg-transparent
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 m-auto mt-3 w-2/12' 
                            type='text' 
                            placeholder='Emoji' 
                            value={collection.emoji} 
                            onChange={(e) => setCollection({...collection, emoji: e.target.value})} 
                            required 
                            minLength={1} 
                            onKeyDown={verifyKey}
                        />
                    </div>
                   
                    <button className='bg-[#3fb9d8] rounded-full m-auto mt-4 p-2' type='submit'>Submit</button>

                </form>

            </motion.div>            
        </Backdrop>
    )
}

export default Modal
