import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import useCollections from '../hooks/useCollections'
import { addCollection, getCollections } from '../services/firebase'
import ChatSelector from './ChatSelector'
import MessageBoard from './MessageBoard'

const ChatApp = () => {

  // const [rooms, setRooms] = useState()
    
  // setRooms(useCollections())

  const [coll, setColl] = useState(1)
  

  const rooms = useCollections(coll)
  
  
  

    return (
        <Router>
          <Routes>
            <Route path='/' element={<ChatSelector rooms={rooms} coll={coll} setColl={setColl}/>} />
            <Route path='/room/:id' element={<MessageBoard rooms={rooms} />} />
          </Routes>
        </Router>
    )
}

export default ChatApp
