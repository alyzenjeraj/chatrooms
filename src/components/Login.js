import React from 'react'
import useAuth from '../hooks/useAuth'


const Login = () => {

    const { login } = useAuth();


    return (
        <div>
            <h2> Log In to Chat!</h2>
            
        </div>
    )
}

export default Login
