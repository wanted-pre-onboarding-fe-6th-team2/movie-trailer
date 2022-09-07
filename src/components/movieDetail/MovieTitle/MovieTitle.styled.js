import styled from '@emotion/styled';

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid white;
  margin: 30px 0;
  padding: 0 30px;
`;

const MovieName = styled.h2`
  font-size: 32px;
  font-weight: 600;
  color: white;
`;

const OriginalMovieName = styled.h3`
  font-size: 16px;
  margin: 5px 0;
  color: white;
`;

export { TitleContainer, MovieName, OriginalMovieName };
