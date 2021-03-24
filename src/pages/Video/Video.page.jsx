import {
  Box,
  Button,
  Grid,
  GridListTile,
  GridListTileBar,
  Typography,
} from '@material-ui/core';
import { Star, StarBorder, ThumbDown, ThumbUp } from '@material-ui/icons';
import React from 'react';
import { useParams, useHistory } from 'react-router';
import {
  CardContentVideo,
  CardVideo,
  CustomGridList,
  InfoContainer,
} from './Video.page.styled';
import { useGetVideo } from '../../Hooks/Video/Video';
import { useSession } from '../../Hooks/Session/Session';

function extractEmbededVideo(video) {
  return `https://${video.player.embedHtml.match(
    /www.youtube.com\/embed\/([A-Za-z_0-9])+/g
  )}`;
}

export function formatDate(date) {
  return new Date(date).toDateString();
}

function starVideo(video, dispatchSession) {
  dispatchSession({ type: 'starVideo', payload: video.id });
}

function videoInformation(video, session, dispatchSession) {
  return (
    <>
      <InfoContainer>
        <Box>
          <Typography>
            {video.statistics.viewCount} Visualizations • Published on{' '}
            {formatDate(video.snippet.publishedAt)}
          </Typography>
        </Box>
      </InfoContainer>
      <InfoContainer>
        <Box mr={1}>
          <ThumbUp />
        </Box>
        <Box>
          <Typography>{video.statistics.likeCount}</Typography>
        </Box>
        <Box mr={1} ml={3}>
          <ThumbDown />
        </Box>
        <Box>
          <Typography>{video.statistics.dislikeCount}</Typography>
        </Box>
        {session.user && (
          <Box>
            <Button size="small" onClick={() => starVideo(video, dispatchSession)}>
              {session.starredVideos.includes(video.id) ? (
                <Star fontSize="small" />
              ) : (
                <StarBorder fontSize="small" />
              )}
            </Button>
          </Box>
        )}
      </InfoContainer>
    </>
  );
}

function player(video) {
  return (
    <iframe
      width="100%"
      height="70%"
      allowFullScreen
      frameBorder="0"
      title={video.snippet.title}
      src={extractEmbededVideo(video)}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    />
  );
}

function VideoSuggestion(suggestion, history) {
  return (
    <GridListTile
      key={suggestion.id.videoId}
      onClick={() => history.push(`/video=${suggestion.id.videoId}`)}
    >
      <img src={suggestion.snippet.thumbnails.high.url} alt={suggestion.snippet.title} />
      <GridListTileBar title={suggestion.snippet.title} />
    </GridListTile>
  );
}

function VideoPage() {
  const { id } = useParams();
  const history = useHistory();
  const { video, suggestions } = useGetVideo(id);
  const { session, dispatchSession } = useSession();
  return (
    <section>
      <Grid data-testid="Video" container spacing={1}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <CardVideo>
            {video && player(video.items[0])}
            <CardContentVideo>
              {video && videoInformation(video.items[0], session, dispatchSession)}
            </CardContentVideo>
            {suggestions && (
              <CustomGridList cols={3.5}>
                {suggestions.items
                  .filter((suggestion) => suggestion.snippet !== undefined)
                  .map((suggestion) => VideoSuggestion(suggestion, history))}
              </CustomGridList>
            )}
          </CardVideo>
        </Grid>
      </Grid>
    </section>
  );
}

export default VideoPage;
