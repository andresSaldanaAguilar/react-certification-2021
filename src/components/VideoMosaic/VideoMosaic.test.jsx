import React from 'react';
import { render, screen } from '@testing-library/react';
import mockData from '../../utils/youtube-videos-mock-v2.json';
import { Theme } from '../../Hooks/Theme/Theme';
import { shortenDescription, shortenTitle } from '../../utils/shortenText';
import VideoMosaic from './VideoMosaic.component';

const mockVideoShortText = mockData.items[0];
const mockVideoLongText = mockData.items[2];
describe('Video Mosaic Component Tests', () => {
  it('Should render the video mosaic', () => {
    render(
      <Theme>
        <VideoMosaic
          key={mockVideoLongText.id.videoId}
          snippet={mockVideoLongText.snippet}
        />
      </Theme>
    );
    expect(screen.getByTestId('VideoMosaic')).toBeInTheDocument();
  });

  it('Should shorten the title and description when they are very long', () => {
    render(
      <Theme>
        <VideoMosaic
          key={mockVideoLongText.id.videoId}
          snippet={mockVideoLongText.snippet}
        />
      </Theme>
    );
    expect(
      screen.getByText(shortenDescription(mockVideoLongText.snippet.description))
    ).toBeInTheDocument();
    expect(
      screen.getByText(shortenTitle(mockVideoLongText.snippet.title))
    ).toBeInTheDocument();
    expect(
      screen.getByTitle(shortenTitle(mockVideoLongText.snippet.title))
    ).toBeInTheDocument();
  });

  it(`Should leave the title and desciption as they are when they're short`, () => {
    render(
      <Theme>
        <VideoMosaic
          key={mockVideoShortText.id.videoId}
          snippet={mockVideoShortText.snippet}
        />
      </Theme>
    );
    expect(screen.getByText(mockVideoShortText.snippet.description)).toBeInTheDocument();
    expect(screen.getByTitle(mockVideoShortText.snippet.title)).toBeInTheDocument();
    expect(screen.getByText(mockVideoShortText.snippet.title)).toBeInTheDocument();
  });
});
