import React from 'react';
import useSWR from 'swr';
import MovieApiService from '@/api/movieService';
import * as Styled from '@/pages/NowPlaying/NowPlaying.styled';
import MovieListItem from '@/components/MovieListItem/MovieListItem';
import PageContainer from '@/components/common/PageContainer/PageContainer';

const Upcoming = () => {
  const { data, error } = useSWR({ page: 1 }, MovieApiService.getUpcomingMovies);

  if (error) {
    console.log('에러 발생');
  } else if (!data) {
    console.log('로딩중입니다.');
  }

  console.log(data);

  return (
    <PageContainer>
      <Styled.MoviePage>
        <Styled.SubTitle>개봉예정작</Styled.SubTitle>
        <Styled.MovieList>
          {data?.results.map(list => (
            <MovieListItem
              key={list.id}
              id={list.id}
              imagePath={list.backdrop_path}
              overview={list.overview}
              title={list.title}
              voteAverage={list.vote_average}
              releaseDate={list.release_date}
            />
          ))}
        </Styled.MovieList>
      </Styled.MoviePage>
    </PageContainer>
  );
};

export default Upcoming;
