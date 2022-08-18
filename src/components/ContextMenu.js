import React from 'react'
import { Menu, MenuItem, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/core.css';
import "@szhsin/react-menu/dist/index.css";
import { EllipsisOutlined } from '@ant-design/icons'
import ReactionItem from './ReactionItem';
import reactionEmojis from '../data/reactionEmojis';

const ContextMenu = ({ docId }) => {
    return (
        <Menu  className='h-0 p-0 cursor-pointer text-black' menuButton={<EllipsisOutlined/>}>
            <MenuItem>Edit</MenuItem>
            <MenuItem>Delete</MenuItem>
                <SubMenu label="Add Reaction" >
                    {reactionEmojis.map((emoji) => (
                        <ReactionItem emoji={emoji} />
                    ))}
                </SubMenu>
        </Menu>
    )
}

export default ContextMenu
