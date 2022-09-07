import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import searchIcon from '@/assets/svg/searchIcon.svg';
import * as Styled from '@/components/search/SearchInput/SearchInput.styled';
import useMovieSearch from '@/hooks/api/useMovieSearch';
import SearchItem from '@/components/search/SearchItem/SearchItem';

const SearchInput = () => {
  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState('');
  const { searchResults } = useMovieSearch({ searchKeyword, page: 1 });

  const handleSearchKeywordInputChange = async ({ target }) => {
    const { value } = target;
    setSearchKeyword(value);
  };

  const handleEnterPress = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      navigate(`?query=${searchKeyword}`);
    }
  };

  return (
    <>
      <Styled.SearchInputSection>
        <Styled.SearchInputForm>
          <Styled.SearchInput
            type="text"
            placeholder="검색어를 입력하세요."
            autoComplete="false"
            value={searchKeyword}
            onChange={handleSearchKeywordInputChange}
            onKeyPress={handleEnterPress}
          />
          {/* <Styled.SearchButton> */}
          <Styled.SearchButton to={`?query=${searchKeyword}`}>
            <img src={searchIcon} alt="검색" />
          </Styled.SearchButton>
          {/* </Styled.SearchButton> */}
        </Styled.SearchInputForm>
      </Styled.SearchInputSection>
      <SearchItem movies={searchResults ? searchResults.results : []} />
    </>
  );
};

export default SearchInput;
