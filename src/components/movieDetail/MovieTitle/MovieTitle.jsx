/* eslint-disable react/prop-types */
import * as Styled from '@/components/movieDetail/MovieTitle/MovieTitle.styled';

const MovieTitle = ({ movieDetail }) => {
  const { title, originalTitle, releaseDate } = movieDetail;

  return (
    <Styled.TitleContainer>
      <Styled.MovieName>{title}</Styled.MovieName>
      <Styled.OriginalMovieName>
        {originalTitle}, {releaseDate.slice(0, 4)}
      </Styled.OriginalMovieName>
    </Styled.TitleContainer>
  );
};

export default MovieTitle;
