import React, { useState } from 'react';
import searchIcon from '@/assets/svg/searchIcon.svg';
import * as Styled from '@/components/search/SearchInput/SearchInput.styled';

const SearchInput = () => {
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSearchKeywordInputChange = ({ target }) => {
    const { value } = target;

    setSearchKeyword(value);
  };

  const handleSearchBtnClick = e => {
    e.preventDefault();

    // TODO: 검색 로직
  };

  return (
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
  );
};

export default SearchInput;
