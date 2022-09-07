import styled from '@emotion/styled';
import { COLORS } from '@/constants/colors.js';

const SearchInputSection = styled.section`
  position: relative;
  width: ${({ isSearchPage }) => (isSearchPage ? '80%' : '40%')};
  height: ${({ isSearchPage }) => isSearchPage && '10vh'};
  margin: 0 auto;
`;

const SearchInputForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 50%;

  box-sizing: border-box;
  border-radius: 0.25em;
  border: none;
  outline: none;

  padding: 0.5em 1em;

  &:focus {
    border: 1px solid ${COLORS.RED};
  }
`;

const SearchButton = styled.button`
  width: 2em;
  height: 2em;

  position: absolute;
  top: ${({ isSearchPage }) => isSearchPage && '1em'};
  right: 0.25em;

  border: none;
  outline: none;
  background-color: transparent;
`;

export { SearchInputSection, SearchInputForm, SearchInput, SearchButton };
