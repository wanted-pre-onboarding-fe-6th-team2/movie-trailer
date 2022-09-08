import * as Styled from '@/components/movieDetail/ProcutionCompany/ProductionCompany.styled';
import DetailContainer from '../DetailContainer/DetailContainer';

const { VITE_IMAGE_BASE_URL } = import.meta.env;

const ProductionCompany = ({ movieDetail }) => {
  const movie = {
    productionCompanies: movieDetail.production_companies,
  };

  return (
    <DetailContainer title="제작사">
      <Styled.ProductionCompanyBox>
        {movie.productionCompanies.map(productionCompany => (
          <Styled.ProductionCompanyItem key={productionCompany.id}>
            <Styled.ProductionCompanyLogo
              src={`${VITE_IMAGE_BASE_URL}/${productionCompany.logo_path}`}
              alt="production-company-logo"
            />
            <Styled.ProductionCompanyName>{productionCompany.name}</Styled.ProductionCompanyName>
          </Styled.ProductionCompanyItem>
        ))}
      </Styled.ProductionCompanyBox>
    </DetailContainer>
  );
};

export default ProductionCompany;
