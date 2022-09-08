/* eslint-disable camelcase */
import * as Styled from '@/components/movieDetail/MovieTitle/MovieTitle.styled';

const MovieTitle = ({ movieDetail }) => {
  const { title, original_title, release_date } = movieDetail;

  return (
    <Styled.TitleContainer>
      <Styled.MovieName>{title}</Styled.MovieName>
      <Styled.OriginalMovieName>
        {original_title}, {release_date.slice(0, 4)}
      </Styled.OriginalMovieName>
    </Styled.TitleContainer>
  );
};

export default MovieTitle;
