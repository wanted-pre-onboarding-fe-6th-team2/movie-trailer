import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { COLORS } from '@/constants/colors.js';

const Header = styled.header`
  width: 100%;
  min-width: 1100px;
  margin: 0 auto;
  background-color: ${COLORS.RED};
`;

const Wrapper = styled.div`
  width: 1050px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  img {
    cursor: pointer;
    margin-top: 2px;
  }
`;

const Gnb = styled.ul`
  display: flex;
`;

const GnbLink = styled(Link)`
  text-decoration: none;
  color: ${COLORS.WHITE};
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  margin: 0 0 0 20px;
  padding: 10px;
  border-radius: 10px;
  transition: all 0.3s ease;
  &:hover {
    background-color: black;
  }
`;

export { Header, Wrapper, Logo, Gnb, GnbLink };
