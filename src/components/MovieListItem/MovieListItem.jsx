import React from 'react';
import { Link } from 'react-router-dom';
import * as Styled from '@/components/MovieListItem/MovieListItem.styled';
import { ROUTES } from '@/constants/route';
import noImage from '@/assets/images/no-image.jpg';

const { VITE_IMAGE_BASE_URL } = import.meta.env;
const MovieListItem = ({ id, imagePath, overview, title, voteAverage, releaseDate }) => {
  const OverviewFormat = () => {
    if (overview.length > 70) return `${overview.substr(0, 70)}...`;
    return overview;
  };
  return (
    <Styled.MovieItem key={id}>
      <Link to={`${ROUTES.MOVIE_DETAIL}/${id}`}>
        <Styled.ImageWrapper>
          <img src={imagePath === null ? noImage : VITE_IMAGE_BASE_URL + imagePath} alt={title} />

          <Styled.Desc>
            <OverviewFormat />
          </Styled.Desc>
        </Styled.ImageWrapper>
        <Styled.InfoWrapper>
          <Styled.Title>{title}</Styled.Title>
          <Styled.FlexBox>
            <Styled.Vote>
              평점 <span>{voteAverage}</span>
            </Styled.Vote>
            <Styled.ReleaseDate>개봉 {releaseDate}</Styled.ReleaseDate>
          </Styled.FlexBox>
        </Styled.InfoWrapper>
      </Link>
    </Styled.MovieItem>
  );
};

export default MovieListItem;
