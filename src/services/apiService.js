import Axios from 'axios';

export const getItemsByPage = async (itemType, pageNumber) =>
  Axios.get(`https://rickandmortyapi.com/api/${itemType}/?page=${pageNumber}`);
// hyg
