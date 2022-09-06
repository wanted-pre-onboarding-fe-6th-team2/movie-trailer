import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/route';
import IMMOVIELOGO from '@/assets/images/logo.png';
import * as Styled from '@/components/common/Header/Header.styled';

const Header = () => {
  return (
    <Styled.Header>
      <Styled.Wrapper>
        <Styled.Logo>
          <Link to={ROUTES.HOME}>
            <img src={IMMOVIELOGO} alt="I.M.MOVIE Logo" />
          </Link>
        </Styled.Logo>
        <nav>
          <Styled.Gnb>
            <li>
              <Link to={ROUTES.HOME}>현재상영작</Link>
            </li>
            <li>
              <Link to={ROUTES.HOME}>개봉예정작</Link>
            </li>
            <li>
              <Link to={ROUTES.HOME}>평점순</Link>
            </li>
            <li>
              <Link to={ROUTES.HOME}>로그인</Link>
            </li>
          </Styled.Gnb>
        </nav>
      </Styled.Wrapper>
    </Styled.Header>
  );
};

export default Header;
