import * as Styled from '@/components/common/GlobalLayout/GlobalLayout.styled';
import Footer from '@/components/common/Footer/Footer';
import Header from '@/components/common/Header/Header';

// eslint-disable-next-line react/prop-types
const PageContainer = ({ children }) => {
  return (
    <Styled.GlobalContainer>
      <Header />
      <Styled.Main>{children}</Styled.Main>
      <Footer />
    </Styled.GlobalContainer>
  );
};

export default PageContainer;
