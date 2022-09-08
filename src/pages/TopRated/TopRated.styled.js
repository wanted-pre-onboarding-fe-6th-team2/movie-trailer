import styled from '@emotion/styled';

const MoviePage = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 150px 0 200px;
`;

const SubTitle = styled.h1`
  font-size: 24px;
  line-height: 28px;
  color: #fff;
  letter-spacing: -0.06em;
  font-weight: bold;
  padding: 0 10px;
`;

const MovieList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 40px;
  justify-content: space-between;
  min-height: 100vh;
`;

const StateContain = styled.div`
  min-height: 100vh;
  padding: 100px 0;
`;

export { MoviePage, MovieList, SubTitle, StateContain };
