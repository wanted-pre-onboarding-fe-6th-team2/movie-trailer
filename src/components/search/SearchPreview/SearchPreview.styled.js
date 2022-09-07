import styled from '@emotion/styled';

const PreviewList = styled.ul`
  position: absolute;
  top: 4em;
  left: 0;

  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  background-color: #fff;

  border: 1px solid #000;
  border-top: none;
`;

const PreviewItem = styled.li`
  padding: 0 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: #eee;
  }
`;

const PreviewItemTitle = styled.h3`
  font-weight: bold;
`;

export { PreviewList, PreviewItem, PreviewItemTitle };
