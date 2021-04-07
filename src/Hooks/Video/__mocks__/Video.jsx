import video from '../../../utils/video-mock.json';
import suggestions from '../../../utils/suggestions-mock.json';
import searchResults from '../../../utils/youtube-videos-mock-v2.json';

// eslint-disable-next-line no-unused-vars
const useGetVideo = jest.fn((id) => {
  return { video, suggestions };
});

const useSearchVideo = jest.fn(() => {
  return searchResults;
});

const useGetStarredVideos = jest.fn(() => {
  return searchResults;
});

export { useGetVideo, useSearchVideo, useGetStarredVideos };
