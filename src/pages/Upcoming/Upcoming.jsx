import React from 'react';
import useUpcomingMovies from '@/hooks/api/useUpcomingMovies';
import * as Styled from '@/pages/Upcoming/Upcoming.styled';
import MovieListItem from '@/components/MovieListItem/MovieListItem';

const Upcoming = () => {
  const { movies, isError, isLoading, infiniteScrollTargetRef } = useUpcomingMovies();

  if (isError) return <Styled.StateContain>Failed to load</Styled.StateContain>;
  if (isLoading) return <Styled.StateContain>Loading...</Styled.StateContain>;

  const movieList = movies.map(({ results }) => results).flat();

  return (
    <>
      <Styled.MoviePage>
        <Styled.SubTitle>개봉예정작</Styled.SubTitle>
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

export default Upcoming;
