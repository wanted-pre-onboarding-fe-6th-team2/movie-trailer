import React from 'react';
import * as Styled from '@/components/home/Main/Main.styled';
import Card from '@/components/home/Card/Card';
import usePopularMovies from '@/hooks/api/usePopularMovies';

const Main = () => {
  const { movies, isLoading, isError } = usePopularMovies();

  if (isLoading) return <div>isLoading...</div>;
  if (isError) return <div>isError...</div>;
  const popularMovies = movies.results;
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.TitleWrapper>
          <Styled.Title>🌟지금 나에게 필요한 인기 영화는🌟</Styled.Title>
        </Styled.TitleWrapper>
        <Styled.CardWrapper>
          {popularMovies.map((movieInfo, idx) => {
            return <Card popularMovies={movieInfo} key={idx} />;
          })}
        </Styled.CardWrapper>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default Main;
