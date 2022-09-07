import React from 'react';
import * as Styled from '@/components/home/Card/Card.styled';
// const VITE_IMAGE_BASE_URL = import.meta.env;

const Card = ({ popularMovies }) => {
  // console.log(popularMovies);
  const url = 'https://image.tmdb.org/t/p/original';

  const onMoveDetail = () => {
    alert('hello');
  };

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.CardImg
          src={url + popularMovies.poster_path}
          onClick={() => {
            onMoveDetail();
          }}
        />
        <Styled.MovieTitle
          onClick={() => {
            onMoveDetail();
          }}
        >
          {popularMovies.title}
        </Styled.MovieTitle>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default Card;
