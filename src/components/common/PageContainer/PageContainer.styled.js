import styled from '@emotion/styled';

const GlobalContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  width: 1100px;
  margin: 0 auto;
  box-sizing: border-box;
  flex-grow: 1;
`;

export { GlobalContainer, Main };
