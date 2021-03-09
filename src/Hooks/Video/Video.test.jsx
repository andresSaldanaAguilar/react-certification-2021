import { renderHook } from '@testing-library/react-hooks';
import { useGetVideo, useSearchVideo } from './Video';
import video from '../../utils/video-mock.json';
import suggestions from '../../utils/suggestions-mock.json';
import searchResults from '../../utils/youtube-videos-mock-v2.json';

jest.mock('../SearchProvider/SearchProvider');

describe('Video Hooks Testing', () => {
  beforeAll(() => {
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({ video }),
      })
    );
  });

  afterEach(() => {
    global.fetch.mockClear();
  });
  afterAll(() => {
    global.fetch.mockRestore();
  });
  describe('Use Get Video', () => {
    it('should search video', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useGetVideo('TEST_ID'));
      await waitForNextUpdate();
      expect(result.current.video.video).toBe(video);
    });
  });
  describe('Use Search Video', () => {
    beforeEach(() => {
      jest.spyOn(global, 'fetch').mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve({ searchResults }),
        })
      );
    });

    it('should search video', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useSearchVideo());
      await waitForNextUpdate();
      expect(result.current.searchResults).toBe(searchResults);
    });
  });
});
