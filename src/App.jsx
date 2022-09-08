import { Global } from '@emotion/react';
import { Route, Routes } from 'react-router-dom';
import resetCss from '@/styles/reset';
import GlobalLayout from '@/components/common/GlobalLayout/GlobalLayout';
import { ROUTES } from '@/constants/route';
import Home from '@/pages/Home/Home';
import NowPlaying from '@/pages/NowPlaying/NowPlaying';
import Upcoming from '@/pages/Upcoming/Upcoming';
import TopRated from '@/pages/TopRated/TopRated';
import MovieDetail from '@/pages/MovieDetail/MovieDetail';
import Search from '@/pages/Search/Search';

const App = () => (
  <GlobalLayout>
    <Global styles={resetCss} />
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.NOW_PLAYING} element={<NowPlaying />} />
      <Route path={ROUTES.UPCOMING} element={<Upcoming />} />
      <Route path={ROUTES.TOP_RATED} element={<TopRated />} />
      <Route path={`${ROUTES.MOVIE_DETAIL}/:movieId`} element={<MovieDetail />} />
      <Route path={ROUTES.SEARCH} element={<Search />} />
    </Routes>
  </GlobalLayout>
);

export default App;
