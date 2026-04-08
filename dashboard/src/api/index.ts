import axios, { type AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com/products",
  headers: {
    "Content-Type": "application/json",
  }
});


export default api;
