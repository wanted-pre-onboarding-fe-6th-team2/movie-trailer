import { Link } from 'react-router-dom';
import FACEBOOKLOGO from '@/assets/images/facebook.png';
import INSTAGRAMLOGO from '@/assets/images/instagram.png';
import TWITTERLOGO from '@/assets/images/twitter.png';
import * as Styled from '@/components/common/Footer/Footer.styled';

const Footer = () => {
  return (
    <Styled.Footer>
      <Styled.Wrapper>
        <Styled.SnsList>
          <li>
            <Link to="https://www.facebook.com/">
              <img src={FACEBOOKLOGO} alt="Facebook logo" />
            </Link>
          </li>
          <li>
            <Link to="https://www.instagram.com/">
              <img src={INSTAGRAMLOGO} alt="Instagram logo" />
            </Link>
          </li>
          <li>
            <Link to="https://www.twitter.com/">
              <img src={TWITTERLOGO} alt="Twitter logo" />
            </Link>
          </li>
        </Styled.SnsList>
        <div>Copyright@2조. All rights reserved</div>
      </Styled.Wrapper>
    </Styled.Footer>
  );
};

export default Footer;
