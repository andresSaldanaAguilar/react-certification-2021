import { Card, CardActionArea, CardMedia, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { shortenDescription, shortenTitle } from '../../utils/shortenText';
import { CustomCardContent, CustomCardContentTitle } from './VideoMosaic.styled';

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
