import useSWRInfinite from 'swr/infinite';
import movieApiService from '@/api/movieService';
import { USE_SWR_KEYS } from '@/constants/swr';
import { generateSwrGetKeyFunction } from '@/utils/swr';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';

const getKey = generateSwrGetKeyFunction(USE_SWR_KEYS.TOP_RATED_MOVIES);

const useTopRatedMovies = ({ language } = {}) => {
  const { data, error, setSize } = useSWRInfinite(getKey, (_, page) =>
    movieApiService.getTopRatedMovies({ language, page })
  );

  const handleFetchMoreTopRatedMovies = () => {
    setSize(prevSize => prevSize + 1);
  };

  const infiniteScrollTargetRef = useInfiniteScroll(handleFetchMoreTopRatedMovies);

  return {
    movies: data,
    isLoading: !error && !data,
    isError: error,
    infiniteScrollTargetRef,
  };
};

export default useTopRatedMovies;
