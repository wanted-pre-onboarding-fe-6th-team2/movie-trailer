import React from 'react';

const SearchItem = ({ movies }) => {
  return (
    <div>
      {movies.map(movie => (
        <div key={movie.id}>
          <h1>{movie.id}</h1>
          <h1>{movie.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default SearchItem;
