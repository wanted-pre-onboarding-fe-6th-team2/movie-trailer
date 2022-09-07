import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from '@/components/home/Card/Card.styled';

const { VITE_IMAGE_BASE_URL } = import.meta.env;

const Card = ({ popularMovies: movieInfo }) => {
  const navigate = useNavigate();
  // console.log(movieInfo);
  const posterUrl = `${VITE_IMAGE_BASE_URL}/${movieInfo.poster_path}`;

  const onMoveDetail = () => {
    const movieId = movieInfo.id;
    navigate(`/movie-detail/${movieId}`);
  };

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.CardImg
          src={posterUrl}
          alr="movie-poster"
          onClick={() => {
            onMoveDetail();
          }}
        />
        <Styled.MovieTitle
          onClick={() => {
            onMoveDetail();
          }}
        >
          {movieInfo.title}
        </Styled.MovieTitle>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default Card;
