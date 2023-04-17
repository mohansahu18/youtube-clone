import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
const Body = () => {
    return (
        <div className='flex justify-center w-full' >
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default Body