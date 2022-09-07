import React, { useState, useEffect } from 'react';
import * as Styled from '@/components/home/Main/Main.styled';
import movieApiService from '@/api/movieService';
import Card from '@/components/home/Card/Card';

const Main = () => {
  const [popularMovies, setPopularMovies] = useState();

  useEffect(() => {
    movieApiService.getPopularMovies().then(response => setPopularMovies(response.results));
  }, []);

  // console.log(popularMovies);

  if (popularMovies === undefined) return <div />;

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.TitleWrapper>
          <Styled.Title>🌟지금 나에게 필요한 인기 영화는🌟</Styled.Title>
        </Styled.TitleWrapper>
        <Styled.CardWrapper>
          {popularMovies === undefined ? (
            <div />
          ) : (
            popularMovies.map((movies, idx) => {
              return <Card popularMovies={movies} key={idx} />;
            })
          )}
        </Styled.CardWrapper>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default Main;
