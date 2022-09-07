import React, { useEffect, useState } from 'react';
import MovieApiService from '@/api/movieService';
import * as Styled from '@/pages/NowPlaying/NowPlaying.styled';
import MovieListItem from '@/components/MovieListItem/MovieListItem';
import PageContainer from '@/components/common/PageContainer/PageContainer';

const TopRated = () => {
  const [movieLists, setMovieLists] = useState([]);

  const getMovieLists = async () => {
    const response = await MovieApiService.getTopRatedMovies({ page: 1 });
    const listResults = response.results;
    setMovieLists(listResults);
  };
  useEffect(() => {
    getMovieLists();
  }, []);

  return (
    <PageContainer>
      <Styled.MoviePage>
        <Styled.SubTitle>평점순</Styled.SubTitle>
        <Styled.MovieList>
          {movieLists.map(list => (
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
