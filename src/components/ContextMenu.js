import React from 'react'
import { Menu, MenuItem, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/core.css';
import "@szhsin/react-menu/dist/index.css";
import { EllipsisOutlined } from '@ant-design/icons'
import reactionEmojis from '../data/reactionEmojis';



import { deleteMessage } from '../services/firebase';

const ContextMenu = ({ docId, setCurrentId, messageId, roomId }) => {

    
    
    return (
        <Menu  className='h-0 pr-3 cursor-pointer text-black' menuButton={<EllipsisOutlined/>}>
            <MenuItem onClick={() => setCurrentId(messageId)}>Edit</MenuItem>
            <MenuItem onClick={() => deleteMessage(roomId, messageId)}>Delete</MenuItem>
                {/* <SubMenu label="Add Reaction" >
                    {reactionEmojis.map((emoji, index) => (
                        <MenuItem  key={index}>{emoji}</MenuItem>
                    ))}
                </SubMenu> */}
        </Menu>
    )
}

export default ContextMenu
