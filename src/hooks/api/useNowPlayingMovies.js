import useSWRInfinite from 'swr/infinite';
import movieApiService from '@/api/movieService';
import { USE_SWR_KEYS } from '@/constants/swr';
import { generateSwrGetKeyFunction } from '@/utils/swr';
import { useInfiniteScroll } from '../useInfiniteScroll';

const getKey = generateSwrGetKeyFunction(USE_SWR_KEYS.NOW_PLAYING_MOVIES);

const useNowPlayingMovies = ({ language } = {}) => {
  const { data, error, setSize } = useSWRInfinite(getKey, (_, page) =>
    movieApiService.getNowPlayingMovies({ language, page })
  );

  const handleFetchMoreNowPlayingMovies = () => {
    setSize(prevSize => prevSize + 1);
  };

  const infiniteScrollTargetRef = useInfiniteScroll(handleFetchMoreNowPlayingMovies);

  return {
    movies: data,
    isLoading: !error && !data,
    isError: error,
    infiniteScrollTargetRef,
  };
};

export default useNowPlayingMovies;
