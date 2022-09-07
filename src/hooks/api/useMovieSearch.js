import useSWR from 'swr';
import searchApiService from '@/api/searchService';
import { USE_SWR_KEYS } from '@/constants/swr';

const useMovieSearch = ({ searchKeyword, language, page } = {}) => {
  const { data, error } = useSWR(USE_SWR_KEYS.MOVIE_SEARCH, () =>
    searchApiService.getMovieSearchResults({ searchKeyword, language, page })
  );

  return {
    searchResults: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useMovieSearch;
