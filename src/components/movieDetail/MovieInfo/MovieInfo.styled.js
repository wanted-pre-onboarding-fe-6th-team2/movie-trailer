import styled from '@emotion/styled';

const MovieInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex: 1;
  margin: 30px 0;
  padding-top: 20px;
`;

const MovieInfoBox = styled.div`
  flex: 2;
  padding: 30px;
`;

const MovieInfoList = styled.li`
  list-style: none;
  line-height: 48px;
  border-bottom: 1px solid black;
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
  margin-right: 10px;
`;

const StarRateBox = styled.div`
  display: flex;
  align-items: center;
`;

const MovieVoteText = styled.span`
  color: black;
`;

export {
  MovieInfoContainer,
  MovieInfoBox,
  MovieInfoList,
  ListTitle,
  ListContent,
  StarRateBox,
  StarIcon,
  MovieVoteText,
};
