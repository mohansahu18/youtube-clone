import React, { useEffect, useState } from 'react'
import { RELATED_VIDEO_API } from '../utils/constant'
import SuggestionVideoCard from './SuggestionVideoCard'
import { Link } from 'react-router-dom'
const SuggestionVideoContainer = ({ videoId }) => {
    const [relatedVideo, setRelatedVideo] = useState([])

    useEffect(() => {
        // console.log("API CALL");
        getRelatedVideo()
    }, [])

    const getRelatedVideo = async () => {
        const data = await fetch(RELATED_VIDEO_API + videoId);
        const json = await data.json();
        setRelatedVideo(json.items)
        // console.log(json.items);
    }
    if (!relatedVideo || relatedVideo.length === 0) {
        return null
    }

    return (
        <>
            {
                relatedVideo.map((relatedVideo) => (
                    <Link to={'/watch?v=' + relatedVideo.id.videoId} key={relatedVideo.id.videoId}>
                        <SuggestionVideoCard key={relatedVideo.id.videoId} info={relatedVideo} />
                    </Link>
                ))
            }
        </>
    )
}

export default SuggestionVideoContainer
