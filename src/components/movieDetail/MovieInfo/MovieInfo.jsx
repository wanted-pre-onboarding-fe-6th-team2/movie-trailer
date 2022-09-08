import * as Styled from '@/components/movieDetail/MovieInfo/MovieInfo.styled';
import { star } from '@/assets/icon';
import MoviePoster from '../MoviePoster/MoviePoster';
import MovieTitle from '../MovieTitle/MovieTitle';

const MovieInfo = ({ movieDetail }) => {
  const movie = {
    releaseDate: movieDetail.release_date,
    genres: movieDetail.genres,
    productionCountries: movieDetail.production_countries,
    runtime: movieDetail.runtime,
    voteAverage: movieDetail.vote_average,
  };
  const movieVoteAverage = Math.round(movie.voteAverage * 10) / 10;

  return (
    <Styled.MovieInfoContainer>
      <MoviePoster movieDetail={movieDetail} />
      <Styled.MovieInfoBox>
        <MovieTitle movieDetail={movieDetail} />
        <Styled.MovieInfoList>
          <Styled.ListTitle>개봉일</Styled.ListTitle>
          <Styled.ListContent>{movie.releaseDate}</Styled.ListContent>
        </Styled.MovieInfoList>
        <Styled.MovieInfoList>
          <Styled.ListTitle>장르</Styled.ListTitle>
          <Styled.ListContent>
            {movie.genres.map(genre => genre.name).join(', ')}
          </Styled.ListContent>
        </Styled.MovieInfoList>
        <Styled.MovieInfoList>
          <Styled.ListTitle>국가</Styled.ListTitle>
          <Styled.ListContent>
            {movie.productionCountries.map(country => country.iso_3166_1).join(', ')}
          </Styled.ListContent>
        </Styled.MovieInfoList>
        <Styled.MovieInfoList>
          <Styled.ListTitle>상영시간</Styled.ListTitle>
          <Styled.ListContent>{movie.runtime}분</Styled.ListContent>
        </Styled.MovieInfoList>
        <Styled.MovieInfoList>
          <Styled.ListTitle>평점</Styled.ListTitle>
          <Styled.ListContent>
            <Styled.StarIcon src={star} alt="movie-vote-average" />
            <span>{movieVoteAverage}/10</span>
          </Styled.ListContent>
        </Styled.MovieInfoList>
      </Styled.MovieInfoBox>
    </Styled.MovieInfoContainer>
  );
};

export default MovieInfo;
