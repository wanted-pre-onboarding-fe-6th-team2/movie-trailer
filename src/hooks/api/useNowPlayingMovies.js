import useSWR from 'swr';
import movieApiService from '@/api/movieService';
import { USE_SWR_KEYS } from '@/constants/swr';

const useNowPlayingMovies = ({ language, page } = {}) => {
  const { data, error } = useSWR(USE_SWR_KEYS.NOW_PLAYING_MOVIES, () =>
    movieApiService.getNowPlayingMovies({ language, page })
  );

  return {
    movies: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useNowPlayingMovies;
