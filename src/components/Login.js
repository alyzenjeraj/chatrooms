import React from 'react'
import useAuth from '../hooks/useAuth'


const Login = () => {

    const { login } = useAuth();


    return (
        
        <div className='flex justify-center'>
            <div>
                <h2 className='font-medium text-xl'> Log In to Chat!</h2>
                <button onClick={login} >Login with Google</button>
                
            </div>
        </div>
    )
}

export default Login
