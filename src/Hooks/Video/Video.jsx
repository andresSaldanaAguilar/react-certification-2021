import { useEffect, useState } from 'react';
import doFetch from '../../utils/fetch';
import {
  getRelatedVideosPath,
  getVideoPath,
  searchVideoPath,
  getVideosByIdPath,
} from '../../utils/paths';
import { useSearchState } from '../Search/Search';
import { useSession } from '../Session/Session';

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

function useGetStarredVideos() {
  const { session } = useSession();
  const [starredVideos, setStarredVideos] = useState(null);
  useEffect(() => {
    if (session.starredVideos) {
      doFetch(getVideosByIdPath(session.starredVideos), setStarredVideos);
    }
  }, [session.starredVideos]);
  return starredVideos;
}

export { useSearchVideo, useGetVideo, useGetStarredVideos };
