import React from 'react'
import useAuth from '../hooks/useAuth'
import { GoogleOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion'


const Login = () => {

    const { login } = useAuth();


    return (
        
        <motion.div 
            className='flex flex-col justify-center items-center h-3/5 w-screen'
            whileInView={{opacity: [0,1], x: [-150,0]}}
            transition={{delay: 0.5, duration: 0.5}}
        >

        <p className='text-center mx-5 mb-4'>A public messsage board where you can find chatrooms that match your interest, or create your own!</p>

        <p className='text-center mx-5 mb-4'>You can edit, delete, and add reactions to your messages! So have fun!</p>

            <div className='bg-sky-800 p-7 rounded-md flex flex-col justify-center '>
                <h2 className='font-medium text-xl m-auto mb-2'> Log In to Chat!</h2>
                
                
            
            <button onClick={login} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <GoogleOutlined className='m-2' />
                <span className="relative px-5 py-2.5 transition-all ease-in duration-200 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Login With Google
                </span>
            </button>
            </div>
        </motion.div>
    )
}

export default Login
