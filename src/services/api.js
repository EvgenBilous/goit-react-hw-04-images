import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '22356210-f5a6fb995cd777b2b01184cc9';
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};
// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

export const searchPhoto = (query, pageNumber) => {
  const params = { q: query, page: pageNumber };
  return axios.get('/', { params }).then(res => res.data);
};
