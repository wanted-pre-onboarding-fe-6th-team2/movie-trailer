import React from 'react';
import useUpcomingMovies from '@/hooks/api/useUpcomingMovies';
import * as Styled from '@/pages/NowPlaying/NowPlaying.styled';
import MovieListItem from '@/components/MovieListItem/MovieListItem';

const Upcoming = () => {
  const { movies, isError, isLoading } = useUpcomingMovies();

  if (isError) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  const movieList = movies.results.map(results => results).flat();

  return (
    <Styled.MoviePage>
      <Styled.SubTitle>개봉예정작</Styled.SubTitle>
      <Styled.MovieList>
        {movieList.map(list => (
          <MovieListItem
            key={list.id}
            id={list.id}
            imagePath={list.backdrop_path}
            overview={list.overview}
            title={list.title}
            voteAverage={list.vote_average}
            releaseDate={list.release_date}
          />
        ))}
      </Styled.MovieList>
    </Styled.MoviePage>
  );
};

export default Upcoming;
