import useSWRInfinite from 'swr/infinite';
import movieApiService from '@/api/movieService';
import { USE_SWR_KEYS } from '@/constants/swr';
import { generateSwrGetKeyFunction } from '@/utils/swr';
import { useInfiniteScroll } from '../useInfiniteScroll';

const getKey = generateSwrGetKeyFunction(USE_SWR_KEYS.UPCOMING_MOVIES);

const useUpcomingMovies = ({ language } = {}) => {
  const { data, error, setSize } = useSWRInfinite(getKey, (_, page) =>
    movieApiService.getUpcomingMovies({ language, page })
  );

  const handleFetchMoreUpcomingMovies = () => {
    setSize(prevSize => prevSize + 1);
  };

  const infiniteScrollTargetRef = useInfiniteScroll(handleFetchMoreUpcomingMovies);

  return {
    movies: data,
    isLoading: !error && !data,
    isError: error,
    infiniteScrollTargetRef,
  };
};

export default useUpcomingMovies;
