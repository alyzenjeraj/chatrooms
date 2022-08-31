import React, { useState, useEffect } from 'react'

import { Menu, MenuItem, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/core.css';
import "@szhsin/react-menu/dist/index.css";
import { SmileOutlined } from '@ant-design/icons'
import reactionEmojis from '../data/reactionEmojis';

import { updateEmoji } from '../services/firebase';

const EmojiMenu = ({ roomId, message}) => {

    const [emoji, setEmoji] = useState('➕')

    const addEmoji = (emo) => {
        if(emo === message.emoji) {
            updateEmoji(roomId, message.id, '➕')
        } else {
            updateEmoji(roomId, message.id, emo)
        }
        
    } 
   

    useEffect(() => {
        setEmoji(message?.emoji)
    }, [message])

    return (
        <div className='pl-3 cursor-pointer'>
            <Menu  
                className='text-black' 
                menuButton={<div>{emoji}</div>}
            >
            {reactionEmojis.map((emoji, index) => (
                <MenuItem  key={index} onClick={() => addEmoji(emoji)} >{emoji}</MenuItem>
            ))}

            </Menu>
        </div>
    )
}

export default EmojiMenu
