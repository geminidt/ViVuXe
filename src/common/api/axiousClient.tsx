import axios from "axios";

const BASE_HOST = "http://localhost:8080";

const axiosClient = axios.create({
  baseURL: BASE_HOST,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
