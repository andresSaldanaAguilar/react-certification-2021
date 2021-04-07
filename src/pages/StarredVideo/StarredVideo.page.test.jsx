import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import video from '../../utils/video-mock.json';
import { Theme } from '../../Hooks/Theme/Theme';
import { Session } from '../../Hooks/Session/Session';
import StarredVideoPage, { formatDate } from './StarredVideo.page';

jest.mock('../../Hooks/Video/Video');
jest.mock('../../utils/storage');

describe('Video View Tests', () => {
  const home = '/starred_video=TEST_ID';
  const history = createMemoryHistory();
  history.push(home);
  beforeEach(() => {
    render(
      <Session>
        <Theme>
          <Router history={history}>
            <StarredVideoPage />
          </Router>
        </Theme>
      </Session>
    );
  });

  it('Should render the video page and the related information for the starred video', () => {
    expect(screen.getByTestId('StarredVideo')).toBeInTheDocument();
  });

  it('Should render the video player', () => {
    expect(screen.getByTitle(video.items[0].snippet.title)).toBeInTheDocument();
  });

  it('Should render the video information', () => {
    expect(screen.getByText(video.items[0].statistics.likeCount)).toBeInTheDocument();
    expect(screen.getByText(video.items[0].statistics.dislikeCount)).toBeInTheDocument();
    expect(
      screen.getByText(video.items[0].statistics.viewCount, { exact: false })
    ).toBeInTheDocument();
    expect(
      screen.getByText(formatDate(video.items[0].snippet.publishedAt), { exact: false })
    ).toBeInTheDocument();
  });
});
