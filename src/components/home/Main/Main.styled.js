import styled from '@emotion/styled';

const Container = styled.section`
  width: 100%;
  min-width: 1000px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 1000px;
  margin: 0 auto;
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: 100px;
`;

const Title = styled.div`
  width: 600px;
  height: 100px;
  font-size: xx-large;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardWrapper = styled.div`
  min-width: 1000px;
  margin-bottom: 100px;
  overflow: hidden;
`;

export { Container, Wrapper, TitleWrapper, Title, CardWrapper };
