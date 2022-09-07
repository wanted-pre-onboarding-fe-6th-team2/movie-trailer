import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import searchIcon from '@/assets/svg/searchIcon.svg';
import * as Styled from '@/components/search/SearchInput/SearchInput.styled';
import searchApiService from '@/api/searchService';
import SearchPreview from '@/components/search/SearchRecommendation/SearchRecommendation';
import { ROUTES } from '@/constants/route';

const SearchInput = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const { pathname } = useLocation();
  const isOpenPreview = searchKeyword && pathname !== ROUTES.SEARCH;
  const [searchedMovies, setSearchedMovies] = useState([]);

  const searchMovieByKeyword = async keyword => {
    try {
      const response = await searchApiService.getMovieSearchResults({
        searchKeyword: keyword,
        page: 1,
      });

      const { results } = response;

      return results;
    } catch (err) {
      return err;
    }
  };

  const handleSearchKeywordInputChange = async ({ target }) => {
    const { value } = target;

    setSearchKeyword(value);

    if (value) {
      const results = await searchMovieByKeyword(value);
      setSearchedMovies(results);
    }
  };

  const handleSearchBtnClick = e => {
    e.preventDefault();

    // TODO: 검색 로직
    // searchMovieByKeyword(searchKeyword);
  };

  return (
    <Styled.SearchInputSection isSearchPage={pathname === ROUTES.SEARCH}>
      <Styled.SearchInputForm>
        <Styled.SearchInput
          type="text"
          placeholder="검색어를 입력하세요."
          autoComplete="false"
          value={searchKeyword}
          onChange={handleSearchKeywordInputChange}
        />
        <Styled.SearchButton type="submit" onClick={handleSearchBtnClick}>
          <img src={searchIcon} alt="검색" />
        </Styled.SearchButton>
      </Styled.SearchInputForm>
      {isOpenPreview && <SearchPreview movies={searchedMovies.slice(0, 10)} />}
    </Styled.SearchInputSection>
  );
};

export default SearchInput;
