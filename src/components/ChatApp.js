import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ChatSelector from './ChatSelector'
import MessageBoard from './MessageBoard'

const ChatApp = () => {
    return (
        <Router>
          <Routes>
            <Route path='/' element={<ChatSelector />} />
            <Route path='/room/:id' element={<MessageBoard />} />
          </Routes>
        </Router>
    )
}

export default ChatApp
