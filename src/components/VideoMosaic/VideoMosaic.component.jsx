import { Card, CardActionArea, CardMedia, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { CustomCardContent, CustomCardContentTitle } from './VideoMosaic.styled';

export function shortenTitle(title) {
  if (title.length > 40) {
    const croppedTitle = title.substring(0, 39);
    return `${croppedTitle}...`;
  }
  return title;
}

export function shortenDescription(description) {
  if (description.length > 150) {
    const croppedDescription = description.substring(0, 149);
    return `${croppedDescription}...`;
  }
  return description;
}

function VideoMosaic(props) {
  const history = useHistory();
  const { title, thumbnails, description } = props.snippet;
  const { id } = props;
  return (
    <>
      <Grid data-testid="VideoMosaic" item xs={12} sm={6} md={4} lg={3}>
        <Card data-testid="VideoMosaicLink" onClick={() => history.push(`/video=${id}`)}>
          <CardActionArea>
            <CardMedia
              component="img"
              src={thumbnails.high.url}
              title={shortenTitle(title)}
              alt={title}
            />
            <CustomCardContent>
              <CustomCardContentTitle>
                <Typography variant="h6">{shortenTitle(title)}</Typography>
              </CustomCardContentTitle>
              <Typography variant="caption">{shortenDescription(description)}</Typography>
            </CustomCardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
}

export default VideoMosaic;
