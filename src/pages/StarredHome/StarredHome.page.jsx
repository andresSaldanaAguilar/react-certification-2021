import { Grid } from '@material-ui/core';
import React from 'react';
import VideoMosaic from '../../components/VideoMosaic';
import { useSession } from '../../Hooks/Session/Session';
import { useGetStarredVideos } from '../../Hooks/Video/Video';
import NotFoundPage from '../NotFound';

function getVideoMosaics(data, dispatchSession) {
  return data.items.map((video) => {
    return (
      <VideoMosaic
        key={video.id}
        snippet={video.snippet}
        id={video.id}
        dispatchSession={dispatchSession}
      />
    );
  });
}

function StarredHomePage() {
  const { session, dispatchSession } = useSession();
  const starredVideos = useGetStarredVideos();

  if (!session.user) {
    return <NotFoundPage />;
  }

  return (
    <section>
      <Grid data-testid="Home" container spacing={1}>
        {starredVideos &&
          starredVideos.items &&
          getVideoMosaics(starredVideos, dispatchSession)}
      </Grid>
    </section>
  );
}

export default StarredHomePage;
