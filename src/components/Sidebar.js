import React from 'react'
import { AiFillHome, AiFillLike } from 'react-icons/ai'
import { MdSubscriptions, MdVideoLibrary, MdWatchLater, MdMovie } from 'react-icons/md'
import { BsFire } from 'react-icons/bs'
import { CiStreamOn } from 'react-icons/ci'
import { IoLogoGameControllerB } from 'react-icons/io'
import { FaHistory, FaShoppingBag } from "react-icons/fa"
import { RiVideoFill, RiMusicFill, RiNewspaperFill } from 'react-icons/ri'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)
    if (!isMenuOpen) return null
    return (
        <div className='px-2 font-sans shadow-xl w-2/12  sm:px-0'>
            <ul className=' text-xs sm:text-sm'>
                <Link to='/'>
                    <li className='flex my-5 py-1 hover:bg-gray-400 hover:rounded-lg hover:cursor-pointer'>
                        <AiFillHome className='mx-2 sm:h-4 sm:w-4' />
                        <span className='ml-1 px-1 h-5 sm:ml-2 sm:block hidden ' >Home</span>
                    </li>
                </Link>

                <li className='flex my-5  py-1 hover:bg-gray-400 hover:rounded-lg hover:cursor-pointer border border-b-slate-800 '>
                    <MdSubscriptions className='sm:h-4 mx-2 sm:mx-0 md:mx-2 sm:w-4' />
                    <span className='ml-1 sm:ml-2 sm:block px-1 hidden'>Subscriptions</span>
                </li >
                <li className='flex my-5  py-1 hover:bg-gray-400 hover:rounded-lg hover:cursor-pointer'>
                    <MdVideoLibrary className='sm:h-4 mx-2 sm:w-4' />
                    <span className='ml-1 px-1 sm:ml-2 sm:block hidden'>Library</span>
                </li>
                <li className='flex my-5  py-1 hover:bg-gray-400 hover:rounded-lg hover:cursor-pointer'>
                    <FaHistory className='sm:h-4 mx-2 sm:w-4' />
                    <span className='ml-1 px-1 sm:ml-2 sm:block hidden'>History</span>
                </li>
                <li className='flex my-5  py-1 hover:bg-gray-400 hover:rounded-lg hover:cursor-pointer'>
                    <RiVideoFill className='sm:h-4 mx-2 sm:w-4' />
                    <span className='ml-1 px-1 sm:ml-2 sm:block hidden'>Your Video</span>
                </li>
                <li className='flex my-5  py-1 hover:bg-gray-400 hover:rounded-lg hover:cursor-pointer'>
                    <MdWatchLater className='sm:h-4 mx-2 sm:w-4' />
                    <span className='ml-1 px-1 sm:ml-2 sm:block hidden'>Watch Later</span>
                </li>
                <li className='flex my-5  py-1 border border-b-slate-800 hover:bg-gray-400 hover:rounded-lg hover:cursor-pointer'>
                    <AiFillLike className='sm:h-4 mx-2 sm:w-4' />
                    <span className='ml-1 px-1 sm:ml-2 sm:block hidden'> Liked Video</span>
                </li>
                <li className='flex py-1 hover:bg-gray-400 hover:rounded-lg hover:cursor-pointer'>
                    <BsFire className='sm:h-4 mx-2 sm:w-4' />
                    <span className='ml-1 px-1 sm:ml-2 sm:block hidden'>Trending</span>
                </li>
                <li className='flex my-5  py-1 hover:bg-gray-400 hover:rounded-lg hover:cursor-pointer'>
                    <FaShoppingBag className='sm:h-4 mx-2 sm:w-4' />
                    <span className='ml-1 px-1 sm:ml-2 sm:block hidden'>Shopping</span>
                </li>
                <li className='flex my-5  py-1 hover:bg-gray-400 hover:rounded-lg hover:cursor-pointer'>
                    <RiMusicFill className='sm:h-4 mx-2 sm:w-4' />
                    <span className='ml-1 px-1 sm:ml-2 sm:block hidden'>Music</span>
                </li>
                <li className='flex my-5  py-1 hover:bg-gray-400 hover:rounded-lg hover:cursor-pointer'>
                    <MdMovie className='sm:h-4 mx-2 sm:w-4' />
                    <span className='ml-1 px-1 sm:ml-2 sm:block hidden'>Movie</span>
                </li>
                <li className='flex my-5  py-1 hover:bg-gray-400 hover:rounded-lg hover:cursor-pointer'>
                    <RiNewspaperFill className='sm:h-4 mx-2 sm:w-4' />
                    <span className='ml-1 px-1 sm:ml-2 sm:block hidden'>News</span>
                </li>
                <li className='flex py-1 hover:bg-gray-400 hover:rounded-lg hover:cursor-pointer'>
                    <CiStreamOn className='sm:h-4 mx-2 sm:w-4' />
                    <span className='ml-1 px-1 sm:ml-2 sm:block hidden'>Live</span>
                </li>
                <li className='flex my-5  py-1 border border-b-slate-800 hover:bg-gray-400 hover:rounded-lg hover:cursor-pointer'>
                    <IoLogoGameControllerB className='sm:h-4 mx-2 sm:w-4' />
                    <span className='ml-1 px-1 sm:ml-2 sm:block hidden' >Game</span>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar