import { renderHook } from '@testing-library/react-hooks';
import { useGetVideo, useSearchVideo } from './Video';
import video from '../../utils/video-mock.json';
import suggestions from '../../utils/suggestions-mock.json';
import searchResults from '../../utils/youtube-videos-mock-v2.json';

jest.mock('../Search/Search');

describe('Video Hooks Testing', () => {
  afterEach(() => {
    global.fetch.mockClear();
  });
  afterAll(() => {
    global.fetch.mockRestore();
  });

  describe('Use Get Video', () => {
    beforeAll(() => {
      jest.spyOn(global, 'fetch').mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve({ ...video }),
        })
      );
    });

    it('should get searched video', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useGetVideo('TEST_ID'));
      await waitForNextUpdate();
      expect(result.current.video).toStrictEqual(video);
    });
  });

  describe('Use Get Video', () => {
    beforeAll(() => {
      jest.spyOn(global, 'fetch').mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve({ ...suggestions }),
        })
      );
    });

    it('should get video suggestions ', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useGetVideo('TEST_ID'));
      await waitForNextUpdate();
      expect(result.current.suggestions).toStrictEqual(suggestions);
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
