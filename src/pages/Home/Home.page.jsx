import { Grid } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import VideoMosaic from '../../components/VideoMosaic';
import { useSearchState } from '../../Hooks/searchContext';

function getVideoMosaics(mockData) {
  return mockData.items.map((item) => {
    return <VideoMosaic key={item.id.videoId} snippet={item.snippet} />;
  });
}

function HomePage() {
  const sectionRef = useRef(null);
  const [searchResults, setSearchResults] = useState(null);
  const searchState = useSearchState();
  const searchMostViewedVideos = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&maxResults=12&order=relevance&q=${searchState}&type=video&key=${process.env.REACT_APP_GAPI_KEY}`;

  useEffect(() => {
    fetch(searchMostViewedVideos)
      .then((response) => response.json())
      .then((data) => setSearchResults(data));
  }, [searchState, searchMostViewedVideos]);

  return (
    <section ref={sectionRef}>
      <Grid data-testid="Home" container spacing={1}>
        {searchResults && getVideoMosaics(searchResults)}
      </Grid>
    </section>
  );
}

export default HomePage;
