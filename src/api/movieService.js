import BaseApiService from '@/api/core';

const DEFAULT_LANGUAGE = 'ko';

class MovieApiService extends BaseApiService {
  constructor() {
    super('movie');
  }

  getMovieDetail = ({ movieId, language = DEFAULT_LANGUAGE } = {}) =>
    this.http
      .get(`/${movieId}?language=${language}`)
      .then(BaseApiService.handleResponse)
      .catch(BaseApiService.handleError);

  getMovieVideos = ({ movieId, language = 'en' } = {}) =>
    this.http
      .get(`/${movieId}/videos?language=${language}`)
      .then(BaseApiService.handleResponse)
      .catch(BaseApiService.handleError);

  getPopularMovies = ({ language = DEFAULT_LANGUAGE, page = 1 } = {}) =>
    this.http
      .get(`/popular?page=${page}&language=${language}`)
      .then(BaseApiService.handleResponse)
      .catch(BaseApiService.handleError);

  getNowPlayingMovies = ({ language = DEFAULT_LANGUAGE, page = 1 } = {}) =>
    this.http
      .get(`/now_playing?page=${page}&language=${language}`)
      .then(BaseApiService.handleResponse)
      .catch(BaseApiService.handleError);

  getUpcomingMovies = ({ language = DEFAULT_LANGUAGE, page = 1 } = {}) =>
    this.http
      .get(`/upcoming?page=${page}&language=${language}`)
      .then(BaseApiService.handleResponse)
      .catch(BaseApiService.handleError);

  getTopRatedMovies = ({ language = DEFAULT_LANGUAGE, page = 1 } = {}) =>
    this.http
      .get(`/top_rated?page=${page}&language=${language}`)
      .then(BaseApiService.handleResponse)
      .catch(BaseApiService.handleError);
}

export default new MovieApiService();
