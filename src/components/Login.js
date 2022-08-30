import React from 'react'
import useAuth from '../hooks/useAuth'


const Login = () => {

    const { login } = useAuth();


    return (
        
        <div className='flex justify-center items-center h-3/5 w-screen'>
            <div className='bg-sky-800 p-7 rounded-md '>
                <h2 className='font-medium text-xl mb-4'> Log In to Chat!</h2>
                <button onClick={login} className='text-2xl p-3 rounded-md bg-sky-600 hover:scale-[1.03]'>Login with Google</button>
                
            </div>
        </div>
    )
}

export default Login
