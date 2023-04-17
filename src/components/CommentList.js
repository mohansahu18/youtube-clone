import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai'
import { dateDiff } from '../utils/helper'
import React from 'react'
import { numberFormatter } from "../utils/helper";

const CommentList = ({ comment }) => {
    const {
        authorDisplayName,
        authorProfileImageUrl,
        textDisplay,
        publishedAt,
        likeCount,
    } = comment?.snippet?.topLevelComment?.snippet;
    return (
        <div className="flex gap-4 my-4">
            <img
                src={authorProfileImageUrl}
                alt="author"
                className="rounded-full h-10"
            />
            <div className="flex flex-col">
                <div className="flex gap-2 items-center">
                    <h3 className="text-md font-semibold text-gray-700">
                        {authorDisplayName}
                    </h3>{" "}
                    <p className="text-xs text-gray-500">
                        {dateDiff(publishedAt)}
                    </p>
                </div>
                <p>{textDisplay}</p>
                <div className="flex items-center gap-2">
                    <AiOutlineLike />
                    {numberFormatter.format(likeCount)}
                    <AiOutlineDislike />
                </div>
            </div>
        </div>
    )
}

export default CommentList
