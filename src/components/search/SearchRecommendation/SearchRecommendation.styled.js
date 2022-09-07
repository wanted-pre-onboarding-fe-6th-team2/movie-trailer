import styled from '@emotion/styled';
import { COLORS } from '@/constants/colors.js';

const RecommendationList = styled.ul`
  position: absolute;
  top: 1.65em;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  padding: 0.5em 0;
  display: flex;
  flex-direction: column;
  color: ${COLORS.BLACK};
  background-color: ${COLORS.WHITE};
`;

const RecommendationItem = styled.li`
  box-sizing: border-box;
  padding: 0 1em;
  display: flex;
  height: 1.25em;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: #eee;
  }
`;

const RecommendationItemTitle = styled.p`
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export { RecommendationList, RecommendationItem, RecommendationItemTitle };
