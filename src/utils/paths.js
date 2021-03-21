import { GOOGLE_API_KEY } from './constants';

export const searchVideoPath = (searchCriteria = '') => {
  return `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&maxResults=12&order=relevance&q=${searchCriteria}&type=video&key=${GOOGLE_API_KEY}`;
};

export const getVideoPath = (id = '') => {
  return `https://youtube.googleapis.com/youtube/v3/videos?part=player&part=contentDetails&part=statistics&part=snippet&id=${id}&maxResults=1&key=${GOOGLE_API_KEY}`;
};

export const getRelatedVideosPath = (id = '') => {
  return `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${id}&maxResults=8&type=video&key=${GOOGLE_API_KEY}`;
};
