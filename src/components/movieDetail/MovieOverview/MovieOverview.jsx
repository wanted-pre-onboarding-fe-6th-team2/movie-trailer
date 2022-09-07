import * as Styeld from '@/components/movieDetail/MovieOverview/MovieOverview.styled';
import DetailContainer from '@/components/movieDetail/DetailContainer/DetailContainer';

const MovieOverview = ({ movieDetail }) => {
  const { overview } = movieDetail;
  return (
    <DetailContainer title="개요">
      <Styeld.Content>{overview}</Styeld.Content>
    </DetailContainer>
  );
};

export default MovieOverview;
