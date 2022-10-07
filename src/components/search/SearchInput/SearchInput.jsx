import React, { useState } from 'react';
import searchIcon from '@/assets/svg/searchIcon.svg';
import * as Styled from '@/components/search/SearchInput/SearchInput.styled';
import useMovieSearch from '@/hooks/api/useMovieSearch';
import SearchItem from '@/components/search/SearchItem/SearchItem';
import Loading from '@/components/common/Loading/Loading';

const SearchInput = () => {
  const randomKeyword = () => {
    const keywords = ['영화', '어벤져스', '스파이더맨', '기생충'];
    const random = Math.floor(Math.random() * 4);

    return keywords[random];
  };

  const [searchKeyword, setSearchKeyword] = useState(randomKeyword());

  const { searchResults, isLoading, isError, infiniteScrollTargetRef } = useMovieSearch({
    searchKeyword,
  });

  const handleSearchKeywordInputChange = ({ target }) => {
    const { value } = target;
    setSearchKeyword(value);
  };

  const handleSearch = e => {
    e.preventDefault();
  };

  const searchedMovieList = searchKeyword
    ? searchResults?.map(({ results }) => results).flat()
    : [];

  if (isLoading) return <Loading />;

  return (
    <Styled.SearchSection>
      <Styled.SearchInputSection>
        <Styled.SearchInputForm onSubmit={handleSearch}>
          <Styled.SearchInput
            type="text"
            placeholder="검색어를 입력하세요."
            autoComplete="false"
            value={searchKeyword}
            onChange={handleSearchKeywordInputChange}
          />
          <Styled.SearchButton>
            <img src={searchIcon} alt="검색" />
          </Styled.SearchButton>
        </Styled.SearchInputForm>
      </Styled.SearchInputSection>
      <Styled.SearchResultSection>
        {isError && <h2>검색된 결과가 없습니다.</h2>}
        {searchedMovieList?.map(movie => (
          <SearchItem
            key={movie.id + movie.title}
            movie={movie}
            isLoading={isLoading}
            target={infiniteScrollTargetRef}
          />
        ))}
        <div ref={infiniteScrollTargetRef} />
      </Styled.SearchResultSection>
    </Styled.SearchSection>
  );
};

export default SearchInput;
