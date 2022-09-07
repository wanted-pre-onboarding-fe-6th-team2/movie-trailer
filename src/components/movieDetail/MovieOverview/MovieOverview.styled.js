import styled from '@emotion/styled';

const MovieOverviewContainer = styled.div`
  min-height: 100px;
  border: 1px solid blue;
  box-sizing: border-box;
  padding: 30px;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 500;
  padding: 10px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
`;

const Content = styled.p`
  font-size: 16px;
  line-height: 24px;
`;

export { MovieOverviewContainer, Title, Content };
