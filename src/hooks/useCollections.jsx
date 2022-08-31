import React, { useEffect, useState } from 'react'
import { getCollections } from '../services/firebase'


const useCollections = (updater) => {
    const [collections, setCollections] = useState([])

    useEffect(() => {

        const getRooms = async () => {
            const unsubscribe = await getCollections(setCollections)
            return unsubscribe;
    
        }

        

        getRooms()

        // const unsubscribe = getCollections(setCollections)
        // return unsubscribe;
        
        
    }, [setCollections, updater])

    
    return collections;
}




export default useCollections