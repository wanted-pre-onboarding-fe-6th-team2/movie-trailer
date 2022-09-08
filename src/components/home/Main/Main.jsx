import React from 'react';
import * as Styled from '@/components/home/Main/Main.styled';
import Card from '@/components/home/Card/Card';
import usePopularMovies from '@/hooks/api/usePopularMovies';
import Loading from '@/components/common/Loading/Loading';
// import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
// import movieApiService from '@/api/movieService';

const Main = () => {
  const { movies, isLoading, isError } = usePopularMovies();

  if (isLoading) return <Loading />;
  if (isError) return <div>오류로 페이지를 불러올 수 없습니다.</div>;

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
          {/* {isLoading && <Loading />} */}
        </Styled.CardWrapper>
        {/* {!isLoad && <div ref={setObservationTarget} />} */}
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default Main;
