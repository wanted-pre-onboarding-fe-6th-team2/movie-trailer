import BaseApiService from '@/api/core';

const DEFAULT_LANGUAGE = 'ko';

class SearchApiService extends BaseApiService {
  constructor() {
    super('search');
  }

  getMovieSearchResults = ({ searchKeyword = '', language = DEFAULT_LANGUAGE, page = 1 } = {}) =>
    this.http
      .get(`/movie?query=${searchKeyword}&page=${page}&language=${language}`)
      .then(BaseApiService.handleResponse)
      .catch(BaseApiService.handleError);
}

export default new SearchApiService();
