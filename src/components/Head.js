import React, { useEffect, useState, useRef } from 'react'
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai"
import Logo from "../assets/images/youtube-logo.png"
import { FaUserCircle } from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appScile'
import { YOUTUBE_SEARCH_SUGGESTION_API } from '../utils/constant'
import { cacheResults } from '../utils/searchSlice'
import { Link } from 'react-router-dom'


const Head = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [suggestion, setSuggestion] = useState([])
    const [showSuggestion, setShowSuggestion] = useState(false)
    const inputRef = useRef(null)

    const searchCache = useSelector(store => store.search)
    const dispatch = useDispatch()

    // api call for getting search suggestion
    useEffect(() => {
        // MAKE AN API CALL AFTER EVERY KEY PRESS
        // BUT THE DIFFERENCE OF 2 API CALL IS <200ms THEN,
        // DECLINE THE API CALL
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestion(searchCache[searchQuery])
            } else {
                getSearchSuggestion()
            }
        }, 200)

        return () => {
            clearTimeout(timer)
        }
    }, [searchQuery])

    const getSearchSuggestion = async () => {
        // console.log("API" + searchQuery);
        const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery);
        const json = await data.json()
        console.log(json);
        setSuggestion(json[1])
        // update the cache
        dispatch(cacheResults(
            {
                [searchQuery]: json[1],
            }
        ))
    }

    const toggleMenuHandler = () => {
        console.log('click');
        dispatch(toggleMenu())
    }

    const handleSuggestionClick = (suggestion) => {
        setSearchQuery(suggestion);
        setTimeout(() => setShowSuggestion(true), 1000);
        inputRef.current.focus();
    }
    const handleSumbit = () => {
        setSearchQuery("")
    }


    return (
        <div className='flex sticky top-0 bg-white z-50 justify-between sm:px-4 pt-2 shadow-lg m-2 '>
            <div className='flex'>
                <AiOutlineMenu onClick={() => toggleMenuHandler()} className='h-4 sm:h-7 sm:w-7 cursor-pointer' />
                <Link to='/'>
                    <img src={Logo} alt='logo' className='h-4 sm:h-6 px-2 cursor-pointer' />
                </Link>
            </div>
            <div>
                <form>
                    <div className=' flex border' >
                        <input placeholder='search'
                            type='text'
                            className='w-28 px-2 h-5 border border-gray-800 sm:w-64 sm:h-6 md:w-96 md:h-8  rounded-l-full'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onFocus={() => setShowSuggestion(true)}
                            onBlur={() => setTimeout(() => setShowSuggestion(false), 200)}
                            ref={inputRef}
                        />
                        <Link to={`/result?search_query=${searchQuery}`}>
                            <button onClick={() => handleSumbit()} className='  bg-gray-300 align-baseline w-6 h-5 sm:h-6 sm:w-12 md:w-16 md:h-8 border border-gray-800 rounded-r-full'>
                                <AiOutlineSearch className='m-auto h-4 sm:h-7 sm:w-7 ' />
                            </button>
                        </Link>

                    </div>
                </form>
                {showSuggestion && (
                    <ul className='bg-white border  w-28 text-xs font-medium sm:text-base sm:w-64  md:w-96 absolute border-gray-300 sm:font-extrabold shadow-lg rounded-lg '>
                        {suggestion.map(e => <li key={e} onClick={() => handleSuggestionClick(e)} className='flex p-2 shadow-md  hover:bg-gray-100'>
                            <AiOutlineSearch className='mr-3 h-4 sm:h-5 sm:w-5 ' />
                            {e}
                        </li>)
                        }
                    </ul>
                )
                }
            </div>
            <FaUserCircle className='h-4 sm:h-7 sm:w-7' />
        </div>
    )
}
export default Head
