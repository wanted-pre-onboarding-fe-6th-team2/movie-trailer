import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieInfo from '@/components/movieDetail/MovieInfo/MovieInfo';
import MovieOverview from '@/components/movieDetail/MovieOverview/MovieOverview';
import ProductionCompany from '@/components/movieDetail/ProcutionCompany/ProductionCompany';
import MovieVideo from '@/components/movieDetail/MovieVideo/MovieVideo';
import useMovieDetail from '@/hooks/api/useMovieDetail';
import Loading from '@/components/common/Loading/Loading';

const initailMovieDetail = {
  title: '',
  originalTitle: '',
  releaseDate: '',
  posterPath: '',
  overview: '',
  runtime: 0,
  voteAverage: 0,
  voteCount: 0,
  genres: [],
  productionCountries: [],
  productionCompanies: [],
  video: [],
  tagline: '',
};

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState(initailMovieDetail);
  const { movie, isLoading, isError } = useMovieDetail({
    movieId,
  });

  useEffect(() => {
    const getMovieDetail = async () => {
      setMovieDetail({
        title: movie.title,
        originalTitle: movie.original_title,
        releaseDate: movie.release_date,
        posterPath: movie.poster_path,
        overview: movie.overview,
        tagline: movie.tagline,
        runtime: movie.runtime,
        voteAverage: movie.vote_average,
        voteCount: movie.vote_count,
        genres: movie.genres,
        productionCompanies: movie.production_companies,
        productionCountries: movie.production_countries,
      });
    };
    getMovieDetail();
  }, [movieId, movie]);

  if (isError) return <div>failed to load...</div>;
  if (isLoading) return <Loading />;

  return (
    <>
      <MovieVideo movieDetail={movieDetail} />
      <MovieInfo movieDetail={movieDetail} />
      <MovieOverview movieDetail={movieDetail} />
      <ProductionCompany movieDetail={movieDetail} />
    </>
  );
};

export default MovieDetail;
