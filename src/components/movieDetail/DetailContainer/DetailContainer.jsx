import * as Styled from '@/components/movieDetail/DetailContainer/DetailContainer.styled';

const DetailContainer = ({ children, title }) => {
  return (
    <Styled.DetailContainer>
      <Styled.DetailTitle>{title}</Styled.DetailTitle>
      <div>{children}</div>
    </Styled.DetailContainer>
  );
};

export default DetailContainer;
