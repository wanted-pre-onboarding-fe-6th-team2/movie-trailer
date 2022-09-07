import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/route';
import immovieLogo from '@/assets/images/logo.png';
import * as Styled from '@/components/common/Header/Header.styled';

const Header = () => {
  return (
    <Styled.Header>
      <Styled.Wrapper>
        <Styled.Logo>
          <Link to={ROUTES.HOME}>
            <img src={immovieLogo} alt="I.M.MOVIE Logo" />
          </Link>
        </Styled.Logo>
        <nav>
          <Styled.Gnb>
            <li>
              <Styled.GnbLink to={ROUTES.SEARCH}>검색</Styled.GnbLink>
            </li>
            <li>
              <Styled.GnbLink to={ROUTES.NOW_PLAYING}>현재상영작</Styled.GnbLink>
            </li>
            <li>
              <Styled.GnbLink to={ROUTES.UPCOMING}>개봉예정작</Styled.GnbLink>
            </li>
            <li>
              <Styled.GnbLink to={ROUTES.TOP_RATED}>평점순</Styled.GnbLink>
            </li>
          </Styled.Gnb>
        </nav>
      </Styled.Wrapper>
    </Styled.Header>
  );
};

export default Header;
