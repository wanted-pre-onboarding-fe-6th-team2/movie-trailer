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
  padding-left: 10px;
  margin-bottom: 16px;
`;

const Content = styled.p`
  font-size: 16px;
  line-height: 32px;
`;

export { MovieOverviewContainer, Title, Content };
