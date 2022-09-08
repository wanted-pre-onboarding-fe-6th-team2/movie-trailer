import useSWRInfinite from 'swr/infinite';
import movieApiService from '@/api/movieService';
import { USE_SWR_KEYS } from '@/constants/swr';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { generateSwrGetKeyFunction } from '@/utils/swr';

const getKey = generateSwrGetKeyFunction(USE_SWR_KEYS.POPULAR_MOVIES);

const usePopularMovies = ({ language } = {}) => {
  const { data, error, setSize } = useSWRInfinite(getKey, (_, page) =>
    movieApiService.getPopularMovies({ language, page })
  );

  const handleFetchMorePopularMovies = () => {
    setSize(prevSize => prevSize + 1);
  };

  const infiniteScrollTargetRef = useInfiniteScroll(handleFetchMorePopularMovies);

  return {
    movies: data,
    isLoading: !error && !data,
    isError: error,
    infiniteScrollTargetRef,
  };
};

export default usePopularMovies;
