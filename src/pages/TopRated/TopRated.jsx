import React from 'react';
import useTopRatedMovies from '@/hooks/api/useTopRatedMovies';
import * as Styled from '@/pages/NowPlaying/NowPlaying.styled';
import MovieListItem from '@/components/MovieListItem/MovieListItem';

const TopRated = () => {
  const { movies, isError, isLoading } = useTopRatedMovies();

  if (isError) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  const movieList = movies.results.map(results => results).flat();

  return (
    <Styled.MoviePage>
      <Styled.SubTitle>평점순</Styled.SubTitle>
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

export default TopRated;
