import React from 'react';
import useUpcomingMovies from '@/hooks/api/useUpcomingMovies';
import * as Styled from '@/pages/NowPlaying/NowPlaying.styled';
import MovieListItem from '@/components/MovieListItem/MovieListItem';
import PageContainer from '@/components/common/PageContainer/PageContainer';

const Upcoming = () => {
  const movieLists = useUpcomingMovies({ page: 1 });

  return (
    <PageContainer>
      <Styled.MoviePage>
        <Styled.SubTitle>개봉예정작</Styled.SubTitle>
        <Styled.MovieList>
          {movieLists.movies?.results.map(list => (
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
