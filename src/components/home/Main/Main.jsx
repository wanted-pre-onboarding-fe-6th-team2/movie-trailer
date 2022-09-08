import React from 'react';
import * as Styled from '@/components/home/Main/Main.styled';
import Card from '@/components/home/Card/Card';
import usePopularMovies from '@/hooks/api/usePopularMovies';
import Loading from '@/components/common/Loading/Loading';

const Main = () => {
  const { movies, isLoading, isError, infiniteScrollTargetRef } = usePopularMovies();

  if (isError) return <div>오류로 페이지를 불러올 수 없습니다.</div>;
  if (isLoading) return <Loading />;

  const popularMovieList = movies.map(({ results }) => results).flat();

  return (
    <>
      <Styled.Container>
        <Styled.Wrapper>
          <Styled.TitleWrapper>
            <Styled.Title>🌟지금 나에게 필요한 인기 영화는🌟</Styled.Title>
          </Styled.TitleWrapper>
          <Styled.CardWrapper>
            {popularMovieList.map((movieInfo, id) => {
              return <Card popularMovies={movieInfo} key={id} />;
            })}
          </Styled.CardWrapper>
        </Styled.Wrapper>
      </Styled.Container>
      <div ref={infiniteScrollTargetRef} />
    </>
  );
};

export default Main;
