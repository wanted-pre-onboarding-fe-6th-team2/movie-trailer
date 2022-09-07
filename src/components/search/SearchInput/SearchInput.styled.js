import styled from '@emotion/styled';

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
  height: 2em;

  box-sizing: border-box;
  border-radius: 1em;
  border: none;
  outline: none;

  font-size: 2em;
  padding: 0.5em 1em;

  border: 1px solid #000;
  &:focus {
    background-color: #eee;
  }
`;

const SearchButton = styled.button`
  width: 3em;
  height: 3em;

  position: absolute;
  top: 1em;
  right: 1.5em;

  border: none;
  outline: none;
  background-color: transparent;
`;

export { SearchInputForm, SearchInput, SearchButton };
