import styled from '@emotion/styled';
import { COLORS } from '@/constants/colors.js';

const ArrowButton = styled.div`
  width: 23px;
  height: 25px;
  margin: 0;
  padding: 20px 12px;
  border: 1px solid;
  border-color: ${COLORS.WHITE};
  background-color: rgba(225, 225, 225, 0.5);
  border-radius: 10px;
  display: flex;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const ArrowIcon = styled.svg`
  width: 100%;
  height: 100%;

  path {
    fill: ${COLORS.WHITE};
    stroke: ${COLORS.WHITE};
  }
`;

export { ArrowButton, ArrowIcon };
