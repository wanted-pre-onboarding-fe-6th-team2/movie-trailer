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
            <a href="https://www.facebook.com/">
              <img src={facebookLogo} alt="Facebook logo" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <img src={instagramLogo} alt="Instagram logo" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/">
              <img src={twitterLogo} alt="Twitter logo" />
            </a>
          </li>
        </Styled.SnsList>
        <div>Copyright@원티드 프리 온보딩 2조. All rights reserved</div>
      </Styled.Wrapper>
    </Styled.Footer>
  );
};

export default Footer;
