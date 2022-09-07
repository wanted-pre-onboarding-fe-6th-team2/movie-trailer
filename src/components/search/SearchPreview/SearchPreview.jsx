import React from 'react';
import * as Styled from '@/components/search/SearchPreview/SearchPreview.styled';

const SearchPreview = ({ movies }) => {
  return (
    <Styled.PreviewList>
      {movies ? (
        movies.map(movie => (
          <Styled.PreviewItem key={movie.id}>
            <Styled.PreviewItemTitle>
              {movie.title}({movie.original_title})
            </Styled.PreviewItemTitle>
            <div>
              <div>{movie.release_date}</div>
              <div>{movie.vote_average}</div>
            </div>
          </Styled.PreviewItem>
        ))
      ) : (
        <li>Not Found</li>
      )}
    </Styled.PreviewList>
  );
};

export default SearchPreview;
