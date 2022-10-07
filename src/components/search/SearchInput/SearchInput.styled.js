import styled from '@emotion/styled';
import { COLORS } from '@/constants/colors.js';

const SearchSection = styled.section`
  max-width: 1600px;
  margin: 0 auto;
`;

const SearchInputSection = styled.section`
  position: relative;
  width: 80%;
  height: 10vh;
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
  width: 1em;
  height: 1em;

  position: absolute;
  top: 1.75em;
  right: 1em;

  border: none;
  outline: none;
  background-color: transparent;
`;

const SearchResultSection = styled.section`
  width: 100%;
  min-height: 150vh;
  padding: 0.5em;
  position: relative;

  & > h2 {
    text-align: center;
    grid-column: 1 / 5;
  }

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;

  & > div {
    width: fit-content;
  }

  & > div:last-child {
    position: absolute;
    width: 0;
    height: 0;
    bottom: -2.5em;
  }
`;

export {
  SearchSection,
  SearchInputSection,
  SearchInputForm,
  SearchInput,
  SearchButton,
  SearchResultSection,
};
