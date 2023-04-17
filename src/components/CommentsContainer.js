import { YOUTUBE_COMMENTS_API } from '../utils/constant'
import React, { useEffect, useState } from 'react'

import CommentList from './CommentList';
const CommentsContainer = ({ videoId }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        console.log("API CALL COMMENTS" + videoId);
        getCommentDetails()
    }, [videoId])

    const getCommentDetails = async () => {
        const data = await fetch(YOUTUBE_COMMENTS_API + videoId)
        const json = await data.json()
        console.log(json);
        setComments(json.items)
    }

    if (!comments || comments.length === 0) return null
    return (
        <>
            <p className='font-bold'>{comments?.length} Comments</p>
            {
                comments.map((c) => (
                    <CommentList key={c?.id} comment={c} />
                ))
            }
            <CommentList comment={comments[0]} />
        </>
    )
}

export default CommentsContainer
