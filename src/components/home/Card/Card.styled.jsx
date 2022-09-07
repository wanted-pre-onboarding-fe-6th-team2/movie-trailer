import styled from '@emotion/styled';

const Container = styled.div`
  float: left;
  width: 250px;
  height: 380px;
  margin: 5px;
  /* background-color: lightgrey; */
  :hover {
    transform: scale(1.1);
    box-shadow: 0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 0 8px 32px -8px hsla(0, 0%, 0%, 0.14),
      0 -6px 32px -6px hsla(0, 0%, 0%, 0.02);
    background-color: black;
  }
`;

const MovieTitle = styled.div`
  width: 200px;
  height: 40px;
  margin: 15px auto;
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
  /* :hover {
    transform: scale(1.1);
    box-shadow: 0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 0 8px 32px -8px hsla(0, 0%, 0%, 0.14),
      0 -6px 32px -6px hsla(0, 0%, 0%, 0.02);
    background-color: black;
  } */
`;

const ImgBox = styled.div`
  position: relative;
  margin: 9px 17px 0px 20px;
  top: -35px;
  width: 285px;
  height: 285px;
`;
const TitleBox = styled.div`
  width: 290px;
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const TagBox = styled.div`
  position: relative;
  top: 20px;
  left: 23px;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  width: 175px;
  height: 30px;
  margin-top: 10px;
`;

const SubBox = styled.div`
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.6em;
  height: 65px;
`;

export { Container, CardImg, ImgBox, MovieTitle, TitleBox, TagBox, SubBox };
