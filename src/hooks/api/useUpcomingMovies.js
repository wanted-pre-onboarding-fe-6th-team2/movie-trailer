import useSWR from 'swr';
import movieApiService from '@/api/movieService';
import { USE_SWR_KEYS } from '@/constants/swr';

const useUpcomingMovies = ({ language, page } = {}) => {
  const { data, error } = useSWR(USE_SWR_KEYS.UPCOMING_MOVIES, () =>
    movieApiService.getUpcomingMovies({ language, page })
  );

  return {
    movies: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useUpcomingMovies;
