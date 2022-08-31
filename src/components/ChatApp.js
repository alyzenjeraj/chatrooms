import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { getCollections } from '../services/firebase'
import ChatSelector from './ChatSelector'
import MessageBoard from './MessageBoard'

const ChatApp = () => {

  const [rooms, setRooms] = useState()
    
    

    return (
        <Router>
          <Routes>
            <Route path='/' element={<ChatSelector rooms={rooms} />} />
            <Route path='/room/:id' element={<MessageBoard rooms={rooms} />} />
          </Routes>
        </Router>
    )
}

export default ChatApp
