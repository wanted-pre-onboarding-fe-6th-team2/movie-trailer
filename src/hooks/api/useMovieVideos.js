import useSWR from 'swr';
import movieApiService from '@/api/movieService';
import { USE_SWR_KEYS } from '@/constants/swr';

const useMovieVideos = ({ movieId, language } = {}) => {
  const { data, error } = useSWR(USE_SWR_KEYS.MOVIE_VIDEOS, () =>
    movieApiService.getMovieVideos({ movieId, language })
  );

  return {
    movie: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useMovieVideos;
