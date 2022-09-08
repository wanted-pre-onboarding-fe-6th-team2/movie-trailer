import styled from '@emotion/styled';

const Container = styled.div`
  float: left;
  width: 250px;
  height: 380px;
  margin: 5px;
  margin-left: 5px;
  :hover {
    transform: scale(1.1);
    box-shadow: 0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 0 8px 32px -8px hsla(0, 0%, 0%, 0.14),
      0 -6px 32px -6px hsla(0, 0%, 0%, 0.02);
    background-color: black;
  }
`;

const Wrapper = styled.div`
  width: 250px;
  height: 350px;
`;

const MovieTitle = styled.div`
  width: 210px;
  height: 40px;
  margin: 15px auto;
  text-align: center;
  font-size: 17px;
`;

const CardImg = styled.div`
  border: 2px solid white;
  position: relative;
  width: 85%;
  height: 85%;
  overflow: hidden;
  background-image: url('${props => props.src}');
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  margin: 15px auto;
`;

export { Container, Wrapper, CardImg, MovieTitle };
