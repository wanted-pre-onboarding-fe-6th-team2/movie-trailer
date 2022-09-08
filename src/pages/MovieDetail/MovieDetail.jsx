import React from 'react';
import { useParams } from 'react-router-dom';
import MovieInfo from '@/components/movieDetail/MovieInfo/MovieInfo';
import MovieOverview from '@/components/movieDetail/MovieOverview/MovieOverview';
import ProductionCompany from '@/components/movieDetail/ProcutionCompany/ProductionCompany';
import MovieVideo from '@/components/movieDetail/MovieVideo/MovieVideo';
import useMovieDetail from '@/hooks/api/useMovieDetail';
import Loading from '@/components/common/Loading/Loading';

const MovieDetail = () => {
  const { movieId } = useParams();

  const { movie, isLoading, isError } = useMovieDetail({
    movieId,
  });

  if (isError) return <div>failed to load...</div>;
  if (isLoading) return <Loading />;

  return (
    <>
      <MovieVideo movieDetail={movie} />
      <MovieInfo movieDetail={movie} />
      <MovieOverview movieDetail={movie} />
      <ProductionCompany movieDetail={movie} />
    </>
  );
};

export default MovieDetail;
