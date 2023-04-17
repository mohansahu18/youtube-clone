
import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_DETAILS_API, YOUTUBE_CHANNEL_DETAILS_API } from '../utils/constant'
import WatchVideoChannelInfo from './WatchVideoChannelInfo';
import WatchVideoButtonList from './WatchVideoButtonList';
import WatchVideoDescription from './WatchVideoDescription';

const WatchVideoDetailsContainer = ({ videoId }) => {
    const [videoDetails, setVideoDetails] = useState();
    const [channelDetails, setChannelDetails] = useState();
    const [isVideoDescriptionVisible, setIsVideoDescriptionVisible] =
        useState(false);

    useEffect(() => {
        getVideoDetails()
        console.log("wvcd jjjjj");
    }, [videoId])
    const getVideoDetails = async () => {
        const data = await fetch(YOUTUBE_VIDEO_DETAILS_API + videoId)
        const json = await data.json();
        console.log(json);
        setVideoDetails(json.items[0])
    }

    useEffect(() => {
        if (videoDetails !== undefined)
            getChannelDetails();
    }, [videoDetails]);

    const getChannelDetails = async (channelId) => {
        const data = await fetch(YOUTUBE_CHANNEL_DETAILS_API + videoDetails?.snippet?.channelId);
        const json = await data.json();
        setChannelDetails(json.items[0]);
        console.log(json);
    };

    // early return
    if (videoDetails === undefined) return;
    const { snippet, statistics } = videoDetails;
    const { channelTitle, title } = snippet;

    return (
        <>
            <div className="px-2">
                <h2 className="font-bold leading-none py-3 text-sm lg:text-lg">
                    {title}
                </h2>
                <div className="justify-between items-center">
                    <WatchVideoChannelInfo
                        channelDetails={channelDetails}
                        channelTitle={channelTitle}
                    />

                    <WatchVideoButtonList statistics={statistics} />
                </div>
                <WatchVideoDescription
                    isVideoDescriptionVisible={isVideoDescriptionVisible}
                    setIsVideoDescriptionVisible={setIsVideoDescriptionVisible}
                    statistics={statistics}
                    snippet={snippet}
                />
            </div>
        </>
    );

}

export default WatchVideoDetailsContainer
