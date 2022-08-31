import { motion } from "framer-motion";

import React from 'react'

const Backdrop = ({ children, onClick}) => {
    return (
        <motion.div
            className='absolute h-screen w-screen flex items-center justify-center bg-[#000000e1]'
            onClick={onClick}
            inital={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}        
        >
            {children}
        </motion.div>
    )
}

export default Backdrop
