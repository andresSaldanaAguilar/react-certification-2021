import { Box, Grid, GridListTile, GridListTileBar, Typography } from '@material-ui/core';
import { ThumbDown, ThumbUp } from '@material-ui/icons';
import React, { useRef } from 'react';
import { useParams, useHistory } from 'react-router';
import {
  CardContentVideo,
  CardVideo,
  CustomGridList,
  InfoContainer,
} from './Video.styled';
import { useGetVideo } from '../../Hooks/Video';

function extractEmbededVideo(video) {
  return `https://${video.player.embedHtml.match(
    /www.youtube.com\/embed\/([A-Za-z_0-9])+/g
  )}`;
}

function videoInformation(video) {
  return (
    <>
      <InfoContainer>
        <Box>
          <Typography>
            {video.items[0].statistics.viewCount} Visualizations • Published on{' '}
            {new Date(video.items[0].snippet.publishedAt).toDateString()}
          </Typography>
        </Box>
      </InfoContainer>
      <InfoContainer>
        <Box mr={1}>
          <ThumbUp />
        </Box>
        <Box>
          <Typography>{video.items[0].statistics.likeCount}</Typography>
        </Box>
        <Box mr={1} ml={3}>
          <ThumbDown />
        </Box>
        <Box>
          <Typography>{video.items[0].statistics.dislikeCount}</Typography>
        </Box>
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
      title="rick roll"
      src={extractEmbededVideo(video.items[0])}
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
  const sectionRef = useRef(null);
  const history = useHistory();
  const { video, suggestions } = useGetVideo(id);

  return (
    <section ref={sectionRef}>
      <Grid data-testid="Video" container spacing={1}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <CardVideo>
            {video && player(video)}
            <CardContentVideo>{video && videoInformation(video)}</CardContentVideo>
            {suggestions && (
              <CustomGridList cols={3.5}>
                {suggestions.items.map((suggestion) =>
                  VideoSuggestion(suggestion, history)
                )}
              </CustomGridList>
            )}
          </CardVideo>
        </Grid>
      </Grid>
    </section>
  );
}

export default VideoPage;
