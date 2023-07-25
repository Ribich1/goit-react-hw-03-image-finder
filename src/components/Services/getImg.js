const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '37177948-5246bdbd194b518a4b536ba26';
let currentPage = 1;
const BASE_OPTION = '&image_type=photo&orientation=horizontal&per_page=12';

export const getImg = searchImg => {
  fetch(
    `${BASE_URL}/?&q=${searchImg}&page=${currentPage}&key=${API_KEY}${BASE_OPTION}`
  )
    .then(response => response.json())
    .then(images => console.log('images', images));
};

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
