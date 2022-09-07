import styled from '@emotion/styled';

const MovieInfoContainer = styled.div`
  display: flex;
  padding: 30px;
  background-color: #1f1f1f;
  box-sizing: border-box;
`;

const MovieInfoBox = styled.div`
  margin: auto 0;
  flex: 1;
  padding: 30px;
`;

const MovieTitle = styled.h2`
  font-size: 32px;
  font-weight: 600;
`;

const MovieInfoList = styled.li`
  line-height: 52px;
  list-style: none;
  border-bottom: 1px solid #4d4c4c;
`;

const ListTitle = styled.span`
  font-weight: 600;
`;

const ListContent = styled.span`
  margin-left: 10px;
`;

const StarIcon = styled.img`
  width: 18px;
  height: 18px;
  vertical-align: middle;
  margin: 0 10px 5px 0;
`;

const StarRateBox = styled.div`
  display: flex;
  align-items: center;
`;

export {
  MovieInfoContainer,
  MovieInfoBox,
  MovieTitle,
  MovieInfoList,
  ListTitle,
  ListContent,
  StarRateBox,
  StarIcon,
};
