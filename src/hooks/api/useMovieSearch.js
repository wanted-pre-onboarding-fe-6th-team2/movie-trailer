import useSWRInfinite from 'swr/infinite';
import searchApiService from '@/api/searchService';
import { USE_SWR_KEYS } from '@/constants/swr';
import { generateSwrGetKeyFunction } from '@/utils/swr';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';

const getKey = generateSwrGetKeyFunction(USE_SWR_KEYS.MOVIE_SEARCH);

const useMovieSearch = ({ searchKeyword, language } = {}) => {
  const { data, error, setSize } = useSWRInfinite(getKey, (_, page) =>
    searchApiService.getMovieSearchResults({ searchKeyword, language, page })
  );

  const handleFetchMoreSearchResults = () => {
    setSize(prevSize => prevSize + 1);
  };

  const infiniteScrollTargetRef = useInfiniteScroll(handleFetchMoreSearchResults);

  return {
    searchResults: data,
    isLoading: !error && !data,
    isError: error,
    infiniteScrollTargetRef,
  };
};

export default useMovieSearch;
