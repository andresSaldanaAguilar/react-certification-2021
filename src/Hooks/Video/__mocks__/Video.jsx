import video from '../../../utils/video-mock.json';
import suggestions from '../../../utils/suggestions-mock.json';

const useGetVideo = jest.fn((id) => {
  return { video, suggestions };
});

export { useGetVideo };
