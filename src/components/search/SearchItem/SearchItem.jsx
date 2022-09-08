import React from 'react';
import Loading from '@/components/common/Loading/Loading';
import MovieListItem from '@/components/MovieListItem/MovieListItem';

const SearchItem = ({ movie, isLoading }) => {
  if (isLoading) return <Loading />;

  return (
    <MovieListItem
      id={movie.id}
      imagePath={movie.poster_path}
      overview={movie.overview}
      title={movie.title}
      voteAverage={movie.vote_average}
      releaseDate={movie.release_date}
    />
  );
};

export default SearchItem;
