import { useState, useEffect } from 'react';
import { ScrollToTopBtn } from '@/components/common/ScrollToTop/ScrollToTop.styled';
import imgUp from '@/assets/images/ic-up.png';

const ScrollToTop = () => {
  const [visibleToTopBtn, setVisibleToTopBtn] = useState(false);

  const throttle = (handler, timeout = 300) => {
    let invokedTime;
    let timer;

    return () => {
      if (!invokedTime) {
        handler.apply(null);
        invokedTime = Date.now();
      } else {
        clearTimeout(timer);
        timer = window.setTimeout(() => {
          handler.apply(null);
          invokedTime = Date.now();
        }, Math.max(timeout - (Date.now() - invokedTime), 0));
      }
    };
  };

  const toggleVisible = throttle(() => {
    const { scrollY } = window;
    if ((scrollY > 300 && visibleToTopBtn) || (scrollY <= 300 && !visibleToTopBtn)) return;
    setVisibleToTopBtn(prev => !prev);
  });

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, [toggleVisible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ScrollToTopBtn onClick={scrollToTop} isDisplay={visibleToTopBtn}>
      <img alt="upImg" src={imgUp} />
    </ScrollToTopBtn>
  );
};

export default ScrollToTop;
