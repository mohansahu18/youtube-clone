import { numberFormatter, dateDiff } from '../utils/helper';
const ResultVideoCard = ({ info }) => {
    const { snippet, statistics } = info;
    const { thumbnails, channelTitle, title } = snippet;

    const viewCount = statistics ? (
        <h4>{numberFormatter.format(statistics.viewCount)} views</h4>
    ) : null;
    return (
        < div className=" m-auto my-2 flex flex-col  w-[90%] p-2 sm:w-60 shadow-xl  hover:shadow-lg rounded-lg " >
            <img
                className=" rounded-lg "
                src={thumbnails?.medium?.url}
                alt="video-thumbnail"
            />
            <div className="flex pt-1 pb-1">
                <ul className="text-xs">
                    <li className="font-bold leading-[1.2rem] pb-1 text-sm">
                        {title.slice(0, 46) + (title.length > 46 ? "..." : "")}
                    </li>
                    <li className="text-gray-600">{channelTitle}</li>
                    <li className="text-gray-600">
                        <span> {viewCount} </span>
                        <span>
                            <span className="font-bold"> · </span>
                            {dateDiff(snippet.publishedAt)}
                        </span>
                    </li>
                </ul>
            </div>
        </div >
    );
};
export default ResultVideoCard;