import React, { useContext } from 'react'
import { AuthContext } from '../context/auth'

const useAuth = () => {

    const value = useContext(AuthContext)

    if (!value) {
        throw new Error('AC Undefined');
    }

    return value;

}

export default useAuth
