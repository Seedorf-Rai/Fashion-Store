import axios from "axios";

const category = axios.create({
    baseURL: 'https://fakestoreapi.com/products/category',
  });
  export default category;