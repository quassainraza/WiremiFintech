import axios from 'axios';

export const HttpClient = () => {
  return axios.create({
    baseURL: 'http://167.235.159.122:4545',
  });
};
