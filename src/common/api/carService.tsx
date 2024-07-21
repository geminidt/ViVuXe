import axiosClient from "./axiousClient";

const BASE_URL = "/api/v1/cars";

const getAllCars = (size: number) => {
  return axiosClient.get(`${BASE_URL}/getall?size=${size}`);
};

const carService = {
  getAllCars,
};

export default carService;
