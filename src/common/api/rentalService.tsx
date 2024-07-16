import axiosClient from "./axiousClient";
import { getHeaderWithToken } from "./getHeaderWithToken";

const BASE_URL = '/api/v1/rentals'

const getRentalPaging = (page: number, size: number) => {
    return axiosClient.get(
        `${BASE_URL}/starred?page=${page}&size=${size}`
    )
}

const createRental = (carId: number, userId: number, rentalDate: string, rentalReturn: string) => {
    return axiosClient.post(
        `${BASE_URL}/create-rental`,
        {
            carId,
            userId,
            rentalDate,
            rentalReturn
        }
    )
}

const getRental = (page: number, size: number) => {
    return axiosClient.get(
        `${BASE_URL}?page=${page}&size=${size}`,
        {headers: getHeaderWithToken()}
    )
}

const deleteRental = (id: number) => {
    return axiosClient.get(
        `${BASE_URL}/deleteRental/${id}`
    )
}

const getRentalById = (id: number) => {
    return axiosClient.get(
        `${BASE_URL}/getRentalById/${id}`
    )
}




const boardService = {
    getRentalPaging,
    createRental,
    getRental,
    deleteRental,
    getRentalById
}

export default boardService