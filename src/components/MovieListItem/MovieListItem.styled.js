import styled from '@emotion/styled';
import { COLORS } from '@/constants/colors.js';

const MovieItem = styled.div`
  padding: 0 10px 30px;
  width: 25%;
  box-sizing: border-box;
  max-width: 500px;
`;

const ImageWrapper = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  &:hover div {
    opacity: 1;
  }
  img {
    max-width: 100%;
    width: 100%;
  }
`;

const Desc = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(26, 25, 28, 0.95);
  opacity: 0;
  -webkit-transition: all 0.2s ease-out 0.3s;
  transition: all 0.2s ease-out;
  color: #fff;
  display: flex;
  align-items: center;
  z-index: 10;
  font-size: 13px;
  line-height: 1.6;
  padding: 1em 2em;
  word-break: keep-all;
`;

const InfoWrapper = styled.div`
  padding: 17px 0;
  color: ${COLORS.WHITE};
`;

const Title = styled.h4`
  display: block;
  overflow: hidden;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  white-space: nowrap;
  text-overflow: ellipsis;
  letter-spacing: -0.06em;
  margin-bottom: 5px;
`;

const FlexBox = styled.div`
  display: flex;
`;

const Vote = styled.p`
  line-height: 25px;
  font-size: 13px;
  font-weight: 300;
  span {
    color: ${COLORS.RED};
  }
`;

const ReleaseDate = styled.p`
  line-height: 25px;
  font-size: 13px;
  padding-left: 10px;
  margin-left: 10px;
  position: Relative;
  &:before {
    content: '|';
    display: inline-block;
    color: #878787;
    font-size: 10px;
    line-height: 20px;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -10px;
  }
`;

export { MovieItem, Title, Vote, ReleaseDate, ImageWrapper, Desc, InfoWrapper, FlexBox };
