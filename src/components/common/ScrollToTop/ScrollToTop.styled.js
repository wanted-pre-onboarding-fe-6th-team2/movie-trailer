import styled from '@emotion/styled';

const ScrollToTopBtn = styled.div`
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  display: ${({ isDisplay }) => (isDisplay ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  cursor: pointer;
`;

export { ScrollToTopBtn };
