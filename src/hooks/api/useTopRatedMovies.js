import useSWR from 'swr';
import movieApiService from '@/api/movieService';
import { USE_SWR_KEYS } from '@/constants/swr';

const useTopRatedMovies = ({ language, page } = {}) => {
  const { data, error } = useSWR(USE_SWR_KEYS.TOP_RATED_MOVIES, () =>
    movieApiService.getTopRatedMovies({ language, page })
  );

  return {
    movies: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useTopRatedMovies;
