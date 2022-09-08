import React from 'react';
import YouTube from 'react-youtube';
import { useParams } from 'react-router-dom';
import * as Styled from '@/components/movieDetail/MovieVideo/MovieVideo.styled';
import useMovieVideos from '@/hooks/api/useMovieVideos';
import Loading from '@/components/common/Loading/Loading';

const videoOptions = {
  height: '400',
  width: '1050',
  playerVars: {
    autoplay: 1,
    controls: 0,
    rel: 0,
    showinfo: 0,
    mute: 1,
    loop: 1,
  },
};

const MovieVideo = ({ movieDetail }) => {
  const { movieId } = useParams();
  const { movie, isLoading, isError } = useMovieVideos({ movieId });
  const videoId = movie?.results[0].key;

  if (isError) return <div>failed to load...</div>;
  if (isLoading) return <Loading />;

  return (
    <Styled.MovieVideoBox>
      <YouTube videoId={videoId} opts={videoOptions} />
      <Styled.TagLine>{movieDetail.tagline}</Styled.TagLine>
    </Styled.MovieVideoBox>
  );
};

export default MovieVideo;
