import React from 'react';
import * as Styled from '@/components/home/Card/Card.styled';

const Card = ({ popularMovies }) => {
  // console.log(popularMovies);
  const url = 'https://image.tmdb.org/t/p/w500/';

  return (
    <Styled.Container>
      {/* <Styled.ImgBox> */}
      <div style={{ width: '250px', height: '350px' }}>
        <Styled.CardImg src={url + popularMovies.poster_path} />
        <Styled.MovieTitle>{popularMovies.title}</Styled.MovieTitle>
      </div>
      {/* </Styled.ImgBox> */}
    </Styled.Container>
  );
};

export default Card;
