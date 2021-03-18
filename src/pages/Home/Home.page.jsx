import { Grid } from '@material-ui/core';
import React from 'react';
import VideoMosaic from '../../components/VideoMosaic';
import { useSearchVideo } from '../../Hooks/Video/Video';

function getVideoMosaics(data) {
  return data.items.map((video) => {
    return (
      <VideoMosaic key={video.id.videoId} snippet={video.snippet} id={video.id.videoId} />
    );
  });
}

function HomePage() {
  const searchResults = useSearchVideo();

  return (
    <section>
      <Grid data-testid="Home" container spacing={1}>
        {searchResults && getVideoMosaics(searchResults)}
      </Grid>
    </section>
  );
}

export default HomePage;
