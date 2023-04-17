import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
const ChatMessage = ({ name, message }) => {
    return (
        <div className='flex pl-1 py-2  w-full  '>
            <FaUserCircle size={20} className=' w-[10%] self-center ' />
            <span className='w-[24%] font-medium self-center  text-sm '>{name}:</span>
            <span className=' w-[66%]  self-center font-normal text-xs '>{message}</span>
        </div>
    )
}

export default ChatMessage
