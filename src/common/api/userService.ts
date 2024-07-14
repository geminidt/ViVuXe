import axiosClient from "./axiousClient"

const END_POINT ='/api/v1/users'

const userService = {
    signUp(body: any) {
        return axiosClient.post(END_POINT, body)
    }
}

export default userService