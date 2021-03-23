import { Grid } from '@material-ui/core';
import React from 'react';
import VideoMosaic from '../../components/VideoMosaic';
import { useGetStarredVideos } from '../../Hooks/Video/Video';

function getVideoMosaics(data) {
  return data.items.map((video) => {
    return <VideoMosaic key={video.id} snippet={video.snippet} id={video.id} />;
  });
}

function StarredVideosPage() {
  const starredVideos = useGetStarredVideos();

  return (
    <section>
      <Grid data-testid="Home" container spacing={1}>
        {starredVideos && getVideoMosaics(starredVideos)}
      </Grid>
    </section>
  );
}

export default StarredVideosPage;
