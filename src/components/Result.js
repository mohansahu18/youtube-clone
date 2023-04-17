import React, { useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { YOUTUBE_SEARCH_API } from '../utils/constant'
import ResultVideoCard from './ResultVideoCard'

const Result = () => {
    const [ResultParams] = useSearchParams()
    const ResultQuery = ResultParams.get('search_query')
    const [searchResult, setSearchResult] = useState([])
    useEffect(() => {
        // API CALL MADE IN EVERYT SEARCH QUEARY
        getSearchResult()
    }, [ResultQuery])

    const getSearchResult = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + ResultQuery)
        const json = await data.json()
        // console.log(json.items);
        setSearchResult(json.items)
    }

    if (!searchResult || searchResult.length === 0) {
        return null
    }

    return (
        <div className='flex flex-wrap w-full justify-center sm:justify-evenly self-center  '>
            {searchResult.map((video) => {
                return (
                    <Link to={'/watch?v=' + video.id.videoId} key={video.id.videoId}>
                        <  ResultVideoCard info={video} />
                    </Link>)
            })}
        </div>
    )
}

export default Result
