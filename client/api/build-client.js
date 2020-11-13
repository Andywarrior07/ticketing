import axios from 'axios';

const buildClient = ({ req }) => {
  if (typeof window === 'undefined') {
    // server
    return axios.create({
      baseURL: 'http://www.ec-app-dev.xyz',
      headers: req.headers,
    });
  }

  return axios.create({
    baseURL: '/',
  });
};

export default buildClient;
