import { Grid } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import VideoMosaic from '../../components/VideoMosaic';
import { useSearchState } from '../../Hooks/searchContext';
import { searchVideoPath } from '../../utils/paths';

function getVideoMosaics(data) {
  return data.items.map((video) => {
    console.log(video);
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
    console.log(searchVideoPath('lol'));
    fetch(searchVideoPath(searchState))
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSearchResults(data);
      });
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
