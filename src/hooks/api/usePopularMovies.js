import useSWR from 'swr';
import movieApiService from '@/api/movieService';
import { USE_SWR_KEYS } from '@/constants/swr';

const usePopularMovies = ({ language, page } = {}) => {
  const { data, error } = useSWR(USE_SWR_KEYS.POPULAR_MOVIES, () =>
    movieApiService.getPopularMovies({ language, page })
  );

  return {
    movies: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default usePopularMovies;
