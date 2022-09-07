/* eslint-disable react/prop-types */
import * as Styled from '@/components/movieDetail/MoviePoster/MoviePoster.styled';

const { VITE_IMAGE_BASE_URL } = import.meta.env;

const MoviePoster = ({ movieDetail }) => {
  const posterUrl = `${VITE_IMAGE_BASE_URL}/${movieDetail.posterPath}`;

  return (
    <Styled.MoviePosterBox>
      <Styled.MoviePosterImage src={posterUrl} alt="movie-poster" />
    </Styled.MoviePosterBox>
  );
};

export default MoviePoster;
