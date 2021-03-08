import { Box, Grid, GridListTile, GridListTileBar, Typography } from '@material-ui/core';
import { ThumbDown, ThumbUp, Visibility } from '@material-ui/icons';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { getVideoPath, getRelatedVideosPath } from '../../utils/paths';
import {
  CardContentVideo,
  CardVideo,
  CustomGridList,
  InfoContainer,
} from './Video.styled';

function extractEmbededVideo(video) {
  return `https://${video.player.embedHtml.match(
    /www.youtube.com\/embed\/([A-Za-z_0-9])+/g
  )}`;
}

function videoInformation(video) {
  return (
    <>
      <InfoContainer>
        <Box mr={1}>
          <Visibility />
        </Box>
        <Box>
          <Typography>{video.items[0].statistics.viewCount}</Typography>
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

function videoSuggestions(suggestions) {
  return suggestions.items.map((suggestion) => (
    <GridListTile key={suggestion.id.videoId}>
      <img
        src={suggestion.snippet.thumbnails.default.url}
        alt={suggestion.snippet.title}
      />
      <GridListTileBar title={suggestion.snippet.title} />
    </GridListTile>
  ));
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

function VideoPage() {
  const { id } = useParams();
  const sectionRef = useRef(null);
  const [video, setVideo] = useState(null);
  const [suggestions, setSuggestions] = useState(null);

  useEffect(() => {
    fetch(getVideoPath(id))
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setVideo(data);
      });
    fetch(getRelatedVideosPath(id))
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSuggestions(data);
      });
  }, [id]);

  return (
    <section ref={sectionRef}>
      <Grid data-testid="Video" container spacing={1}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <CardVideo>
            {video && player(video)}
            <CardContentVideo>{video && videoInformation(video)}</CardContentVideo>
            <CustomGridList cols={3.5}>
              {suggestions && videoSuggestions(suggestions)}
            </CustomGridList>
          </CardVideo>
        </Grid>
      </Grid>
    </section>
  );
}

export default VideoPage;
