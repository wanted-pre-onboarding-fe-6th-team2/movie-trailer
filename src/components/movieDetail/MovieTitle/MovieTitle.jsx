import * as Styled from '@/components/movieDetail/MovieTitle/MovieTitle.styled';

const MovieTitle = ({ movieDetail }) => {
  const movie = {
    title: movieDetail.title,
    originalTitle: movieDetail.original_title,
    releaseDate: movieDetail.release_date,
  };

  return (
    <Styled.TitleContainer>
      <Styled.MovieName>{movie.title}</Styled.MovieName>
      <Styled.OriginalMovieName>
        {movie.originalTitle}, {movie.releaseDate.slice(0, 4)}
      </Styled.OriginalMovieName>
    </Styled.TitleContainer>
  );
};

export default MovieTitle;
