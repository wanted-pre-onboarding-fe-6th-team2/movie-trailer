import React from 'react';
import useNowPlayingMovies from '@/hooks/api/useNowPlayingMovies';
import * as Styled from '@/pages/NowPlaying/NowPlaying.styled';
import MovieListItem from '@/components/MovieListItem/MovieListItem';

const NowPlaying = () => {
  const { movies, isError, isLoading, infiniteScrollTargetRef } = useNowPlayingMovies();

  if (isError) return <Styled.StateContain>Failed to load</Styled.StateContain>;
  if (isLoading) return <Styled.StateContain>Loading...</Styled.StateContain>;
  const movieList = movies.map(({ results }) => results).flat();

  return (
    <>
      <Styled.MoviePage>
        <Styled.SubTitle>현재 상영작</Styled.SubTitle>
        <Styled.MovieList>
          {movieList.map(list => (
            <MovieListItem
              key={list.id}
              id={list.id}
              imagePath={list.poster_path}
              overview={list.overview}
              title={list.title}
              voteAverage={list.vote_average}
              releaseDate={list.release_date}
            />
          ))}
        </Styled.MovieList>
      </Styled.MoviePage>
      <div ref={infiniteScrollTargetRef} />
    </>
  );
};

export default NowPlaying;
