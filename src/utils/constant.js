
const MY_GOOGLE_API_KEY = 'AIzaSyDrtCrNUk9akMhSrY0WzJy8v7pCSDryFdM'
// const MY_GOOGLE_API_KEY = "AIzaSyClu2V_22XpCG2GTe1euD35_Mh5bn4eTjA";

export const YOUTUBE_VIDEOS_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=' + MY_GOOGLE_API_KEY


export const YOUTUBE_SEARCH_SUGGESTION_API = 'https://cors-anywhere.herokuapp.com/https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';


export const YOUTUBE_SEARCH_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&key= + ${MY_GOOGLE_API_KEY}&q=`

export const VIDEO_INFO_BY_VIDEO_ID = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${MY_GOOGLE_API_KEY}&id=`

export const RELATED_VIDEO_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&key=${MY_GOOGLE_API_KEY}&relatedToVideoId=`

export const YOUTUBE_VIDEO_DETAILS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${MY_GOOGLE_API_KEY}&id=`;

export const YOUTUBE_CHANNEL_DETAILS_API = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=${MY_GOOGLE_API_KEY}&id=`;

export const YOUTUBE_COMMENTS_API = `https://www.googleapis.com/youtube/v3/commentThreads?textFormat=plainText&part=snippet&maxResults=50&key=${MY_GOOGLE_API_KEY}&videoId=`;
