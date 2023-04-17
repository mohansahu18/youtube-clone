import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appScile'
import { useSearchParams } from 'react-router-dom'
// import { VIDEO_INFO_BY_VIDEO_ID } from './utils/constant'
import CommentsContainer from './CommentsContainer'
import LiveChats from './LiveChats'
import SuggestionVideoContainer from './SuggestionVideoContainer'
import WatchVideoDetailsContainer from './WatchVideoDetailsContainer'

const WatchPage = () => {
    const [SearchParams] = useSearchParams()
    // console.log(SearchParams.get('v'));

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(closeMenu())

    }, [])


    return (
        <div className='flex md:flex-row flex-col md:w-full flex-wrap w-[87%] sm:w-4/5   justify-center sm:justify-around '>
            <div className='flex flex-col md:w-[60%] lg:w-[70%] p-2 w-full'>
                <iframe
                    className='md:h-96 sticky top-7 z-20 md:static shadow-lg rounded-lg h-48  w-full'
                    src={`https://www.youtube.com/embed/` + SearchParams.get('v') + "?autoplay=1"}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                </iframe>
                <WatchVideoDetailsContainer className="" videoId={SearchParams.get('v')} />
                <div className='hidden md:block'>
                    <CommentsContainer videoId={SearchParams.get('v')} />
                </div>
            </div>
            <div className=' p-2 w-full md:w-[40%] lg:w-[30%]'>
                <LiveChats />
                <SuggestionVideoContainer videoId={SearchParams.get('v')} />
            </div>
        </div>
    )
}

export default WatchPage


