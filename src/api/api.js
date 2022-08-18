import { API_BASE_URL } from '@config/constants';

export class Api {
  static async request(endpoint, options = {}) {
    let queryParams = new URLSearchParams(options.queryParams);
    queryParams = queryParams.toString() !== '' ? `?${queryParams}` : '';

    const response = await fetch(`${API_BASE_URL}${endpoint}${queryParams}`, options);
    const data = await response.json();
    
    const status = typeof data.status === 'number' ? data.status : response.status;

    return {
      data,
      status,
    };
  }

  static async get(endpoint, options = {}) {
    return this.request(endpoint, options);
  }
}
