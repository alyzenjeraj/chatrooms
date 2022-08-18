import React from 'react'
import { MenuItem } from '@szhsin/react-menu';

const ReactionItem = ({ emoji }) => {
    return (
        <MenuItem>{emoji}</MenuItem>
    )
}

export default ReactionItem
