import axios from 'axios';
import {Auth} from 'aws-amplify';

async function currentSession() {
  try {
    const data = await Auth.currentSession();
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
}

const instance = axios.create({
  baseURL: `${process.env.VITE_API_BASE_URL}`,
});

instance.interceptors.request.use(
  async config => {
    const token = await currentSession();
    if (token !== null) {
      if (config.headers) {
        // Ensure headers are defined
        config.headers.Authorization = `Bearer ${token
          .getIdToken()
          .getJwtToken()}`;
        config.headers.Accept = 'application/json';
        config.headers['Accept-Language'] = 'en';
      } else {
        config.headers = {
          Authorization: `Bearer ${token.getIdToken().getJwtToken()}`,
          Accept: 'application/json',
          'Accept-Language': 'en',
        };
      }
    }
    return config;
  },
  error => Promise.reject(error),
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if ([401, 403].includes(error.response.status)) {
      console.log('Invalid token or expired token.');
      const data = currentSession();
      if (data !== null) {
        // window.location.reload();
      }
    }
    return Promise.reject(error);
  },
);

export default instance;
