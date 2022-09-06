import styled from '@emotion/styled';
import { COLORS } from '@/constants/colors.js';

const Footer = styled.footer`
  width: 100%;
  min-width: 1100px;
  margin: 0 auto;
  color: ${COLORS.WHITE};
`;

const Wrapper = styled.div`
  width: 1050px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const SnsList = styled.ul`
  display: flex;

  li {
    display: flex;
    align-items: center;
  }
  img {
    width: 30px;
    margin: 0 10px;
  }
`;

export { Footer, Wrapper, SnsList };
