import React from 'react';
import * as Styled from '@/components/search/SearchRecommendation/SearchRecommendation.styled';

const SearchPreview = ({ movies }) => {
  return (
    <Styled.RecommendationList>
      {movies.map(movie => (
        <Styled.RecommendationItem key={movie.id}>
          <Styled.RecommendationItemTitle>
            {movie.title}({movie.original_title})
          </Styled.RecommendationItemTitle>
          <div>{movie.vote_average}</div>
        </Styled.RecommendationItem>
      ))}
    </Styled.RecommendationList>
  );
};

export default SearchPreview;
