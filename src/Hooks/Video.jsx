import { useEffect, useState } from 'react';
import doFetch from '../utils/fetch';
import { getRelatedVideosPath, getVideoPath, searchVideoPath } from '../utils/paths';
import { useSearchState } from './SearchProvider';

function useSearchVideo() {
  const searchState = useSearchState();
  const [searchResults, setSearchResults] = useState(null);
  useEffect(() => {
    doFetch(searchVideoPath(searchState), setSearchResults);
  }, [searchState]);
  return searchResults;
}

function useGetVideo(id) {
  const [video, setVideo] = useState(null);
  const [suggestions, setSuggestions] = useState(null);
  useEffect(() => {
    doFetch(getVideoPath(id), setVideo);
    doFetch(getRelatedVideosPath(id), setSuggestions);
  }, [id]);
  return { video, suggestions };
}

export { useSearchVideo, useGetVideo };
