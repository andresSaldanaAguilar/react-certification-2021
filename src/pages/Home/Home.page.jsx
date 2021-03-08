import { Grid } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import VideoMosaic from '../../components/VideoMosaic';
import { useSearchState } from '../../Hooks/searchContext';
import { searchVideoPath } from '../../utils/paths';
// import mockVideos from '../../utils/youtube-videos-mock-v2.json';

function getVideoMosaics(data) {
  return data.items.map((video) => {
    return (
      <VideoMosaic key={video.id.videoId} snippet={video.snippet} id={video.id.videoId} />
    );
  });
}

function HomePage() {
  const sectionRef = useRef(null);
  const [searchResults, setSearchResults] = useState(null);
  const searchState = useSearchState();

  useEffect(() => {
    fetch(searchVideoPath(searchState))
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSearchResults(data);
      });
    // setSearchResults(mockVideos);
  }, [searchState]);

  return (
    <section ref={sectionRef}>
      <Grid data-testid="Home" container spacing={1}>
        {searchResults && getVideoMosaics(searchResults)}
      </Grid>
    </section>
  );
}

export default HomePage;
