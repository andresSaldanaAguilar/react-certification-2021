import { GOOGLE_API_KEY } from './constants';

export const searchVideoPath = (searchCriteria = '') => {
  return `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&maxResults=2&order=relevance&q=${searchCriteria}&type=video&key=${GOOGLE_API_KEY}`;
};

export const getVideoPath = (id = '') => {
  return `https://youtube.googleapis.com/youtube/v3/videos?part=player&part=contentDetails&part=statistics&id=${id}&maxResults=1&key=${GOOGLE_API_KEY}`;
};
