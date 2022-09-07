import styled from '@emotion/styled';

const Container = styled.section`
  width: 100%;
  min-width: 1100px;
  margin: 0 auto;
  padding: 20px;
`;

const Wrapper = styled.div`
  /* border: 3px solid lightgray; */
  width: 100%;
  min-height: 1000px;
  margin: 0 auto;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const TitleWrapper = styled.div`
  width: 100%;
  height: 100px;
`;

const Title = styled.div`
  /* border: 3px solid white; */
  width: 600px;
  height: 100px;
  font-size: xx-large;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardWrapper = styled.div`
  border: 4px solid black;
  width: 1100px;
  overflow: hiddenl;
`;

export { Container, Wrapper, TitleWrapper, Title, CardWrapper };
