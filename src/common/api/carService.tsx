import axiosClient from "./axiousClient";
import { getHeaderWithToken } from "./getHeaderWithToken";

const BASE_URL = "/api/v1/cars";

const getCarPaging = (page: number, size: number) => {
  return axiosClient.get(`${BASE_URL}/starred?page=${page}&size=${size}`, {
    // headers: getHeaderWithToken(),
  });
};

// const createCar = (
//   carId: number,
//   // licensePlate: string,
//   cost: number,
//   createDate: string,
//   address: string,
//   make: string,
//   model: string,
//   seat: number,
//   year: number,
//   transmission: string,
//   fuel: string,
//   bluetooth: boolean,
//   map: boolean,
//   tireSensor: boolean,
//   collisionSensor: boolean,
//   speedWarning: boolean,
//   truckCover: boolean,
//   camera360: boolean,
//   sideCamera: boolean,
//   dashCamera: boolean,
//   rearCamera: boolean,
//   gps: boolean,
//   childSeat: boolean,
//   usb: boolean,
//   spareTire: boolean,
//   dvdScreen: boolean,
//   etc: boolean,
//   airbags: boolean,
//   status: string,
//   description: string
// ) => {
//   return axiosClient.post(`${BASE_URL}/create-car`, {
//     carId,
//     // licensePlate,
//     cost,
//     createDate,
//     address,
//     make,
//     model,
//     seat,
//     year,
//     transmission,
//     fuel,
//     bluetooth,
//     map,
//     tireSensor,
//     collisionSensor,
//     speedWarning,
//     truckCover,
//     camera360,
//     sideCamera,
//     dashCamera,
//     rearCamera,
//     gps,
//     childSeat,
//     usb,
//     spareTire,
//     dvdScreen,
//     etc,
//     airbags,
//     status,
//     description,
//   });
// };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createCar = (body: any) => {
  return axiosClient.post(`${BASE_URL}`, body)
}

const getCar = (page: number, size: number) => {
  return axiosClient.get(`${BASE_URL}?page=${page}&size=${size}`, {
    //   headers: getHeaderWithToken(),
  });
};

const getCarById = (id: number) => {
  return axiosClient.get(`${BASE_URL}/${id}`, {
    headers: getHeaderWithToken(),
  });
};

const deleteCar = (id: number) => {
  return axiosClient.get(`${BASE_URL}/deleteUser/${id}`);
};

const carService = {
  getCarPaging,
  createCar,
  getCar,
  getCarById,
  deleteCar,
};

export default carService;
