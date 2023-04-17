import React from 'react'

const SuggestionVideoCard = ({ info }) => {
    const { snippet } = info;
    const { thumbnails, channelTitle, title } = snippet;

    return (
        <div className='flex h-24 py-3'>
            <img className='rounded-lg w-44' src={thumbnails?.maxres?.url !== undefined
                ? thumbnails?.maxres?.url
                : thumbnails?.high?.url} alt='video-thumbnail' />
            <ul className="text-xs pl-2">
                <li className="font-bold leading-[1.2rem] pb-2 text-sm">
                    {title.slice(0, 30) + (title.length > 30 ? "..." : "")}
                </li>
                <li className="text-gray-600 pb-1">{channelTitle}</li>
            </ul>

        </div>
    )
}

export default SuggestionVideoCard
