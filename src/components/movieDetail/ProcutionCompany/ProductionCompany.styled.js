import styled from '@emotion/styled';

const ProductionCompanyBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 100px;
`;

const ProductionCompanyItem = styled.div`
  width: 130px;
  height: 130px;
  margin: 10px;
  padding: 18px;
  background-color: white;
  border-radius: 30px;
`;

const ProductionCompanyLogo = styled.img`
  width: 100px;
  height: 100px;
  display: block;
  margin: auto;
`;

const ProductionCompanyName = styled.div`
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  margin-top: 10px;
  color: black;
`;
export {
  ProductionCompanyBox,
  ProductionCompanyItem,
  ProductionCompanyLogo,
  ProductionCompanyName,
};
