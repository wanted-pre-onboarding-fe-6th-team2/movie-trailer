import { useState, useEffect } from 'react';
import { ScrollToTopBtn, UpperImg } from '@/components/common/ScrollToTop/ScrollToTop.styled';
import imgUp from '@/assets/images/ic-up.png';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const { scrollY } = window;
    if (scrollY > 300) return setVisible(true);
    return setVisible(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ScrollToTopBtn onClick={scrollToTop} isDisplay={visible}>
      <UpperImg src={imgUp} />
    </ScrollToTopBtn>
  );
};

export default ScrollToTop;
