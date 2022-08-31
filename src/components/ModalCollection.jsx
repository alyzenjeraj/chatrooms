import React from 'react'
import { CloseOutlined } from '@ant-design/icons'

const ModalCollection = ({ closeModal }) => {
    return (
        <div className='h-80' >
        <CloseOutlined onClick={closeModal}/>
            <form>
                <h1>New Collection!</h1>
            </form>
            
        </div>
    )
}

export default ModalCollection
