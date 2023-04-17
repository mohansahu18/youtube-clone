import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constant'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

const VideoContainer = () => {

    const [videos, setVideos] = useState([])
    useEffect(() => {
        getVideos()
    }, [])

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API)
        const json = await data.json()
        // console.log(json.items);
        setVideos(json?.items)
    }

    if (!videos || videos.length === 0) {
        return null
    }


    return (
        <div className='flex flex-wrap  w-full justify-center sm:justify-evenly self-center'>
            {videos.map((video) => {
                return (
                    <Link to={'/watch?v=' + video.id} key={video.id}>
                        <VideoCard info={video} />
                    </Link>
                );
            })}
        </div>
    )



}
export default VideoContainer


