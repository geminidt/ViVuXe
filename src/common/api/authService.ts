import axiosClient from "./axiousClient"

const END_POINT ='v1/users'

const authService = {
    signIn(){

    },
    signUp(body: any) {
        return axiosClient.post(END_POINT, body)
    }
}

export default authService