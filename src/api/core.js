import axios from 'axios';

const { VITE_API_BASE_URL, VITE_API_ACCESS_TOKEN } = import.meta.env;

class BaseApiService {
  constructor(path) {
    this.http = axios.create({
      baseURL: `${VITE_API_BASE_URL}/${path ?? ''}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${VITE_API_ACCESS_TOKEN}`,
      },
    });
  }

  static handleResponse = response => response.data;

  static handleError(error) {
    if (error instanceof Error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          throw error;
        } else if (error.request) {
          throw new Error(error);
        }
      } else {
        throw new Error(error.message);
      }
    }
    throw new Error(error);
  }
}

export default BaseApiService;
