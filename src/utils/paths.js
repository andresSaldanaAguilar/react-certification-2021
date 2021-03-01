const GAPI_KEY = process.env.REACT_APP_GAPI_KEY;
export const listPopularVideos = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=12&key=${GAPI_KEY}`;
