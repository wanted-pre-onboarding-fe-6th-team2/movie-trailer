import { Link } from 'react-router-dom';
import facebookLogo from '@/assets/images/facebook.png';
import instagramLogo from '@/assets/images/instagram.png';
import twitterLogo from '@/assets/images/twitter.png';
import * as Styled from '@/components/common/Footer/Footer.styled';

const Footer = () => {
  return (
    <Styled.Footer>
      <Styled.Wrapper>
        <Styled.SnsList>
          <li>
            <Link to="https://www.facebook.com/">
              <img src={facebookLogo} alt="Facebook logo" />
            </Link>
          </li>
          <li>
            <Link to="https://www.instagram.com/">
              <img src={instagramLogo} alt="Instagram logo" />
            </Link>
          </li>
          <li>
            <Link to="https://www.twitter.com/">
              <img src={twitterLogo} alt="Twitter logo" />
            </Link>
          </li>
        </Styled.SnsList>
        <div>Copyright@원티드 프리 온보딩 2조. All rights reserved</div>
      </Styled.Wrapper>
    </Styled.Footer>
  );
};

export default Footer;
