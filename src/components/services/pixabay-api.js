import axios from 'axios';

const API_KEY = '40827343-3d4cfe2da7e34096e28537a58';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export function getPhotoGallery(query, page, perPage) {
  return axios.get('', {
    params: {
      key: API_KEY,
      q: query,
      page,
      per_page: perPage,
    },
  });
}
