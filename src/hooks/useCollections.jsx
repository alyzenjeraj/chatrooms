import React, { useEffect, useState } from 'react'
import { getCollections } from '../services/firebase'


const useCollections = () => {
    const [collections, setCollections] = useState([])

    useEffect(() => {

        
        const unsubscribe = getCollections(setCollections)
        return unsubscribe;
    

        

        // const unsubscribe = getCollections(setCollections)
        // return unsubscribe;
        
        
    }, [])

    console.log('these are the collecitons')
    console.log(collections)
    return collections;
}




export default useCollections