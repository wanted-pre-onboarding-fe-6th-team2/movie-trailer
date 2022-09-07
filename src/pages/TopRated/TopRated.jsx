import React from 'react';
import useTopRatedMovies from '@/hooks/api/useTopRatedMovies';
import * as Styled from '@/pages/NowPlaying/NowPlaying.styled';
import MovieListItem from '@/components/MovieListItem/MovieListItem';
import PageContainer from '@/components/common/PageContainer/PageContainer';

const TopRated = () => {
  const getMovieLists = useTopRatedMovies({ page: 10 });

  return (
    <PageContainer>
      <Styled.MoviePage>
        <Styled.SubTitle>평점순</Styled.SubTitle>
        <Styled.MovieList>
          {getMovieLists.movies?.results.map(list => (
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

export default TopRated;
