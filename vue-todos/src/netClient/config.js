import axios from "axios";
import router from "../router";

const netClient = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 10000,
})

netClient.interceptors.request.use(
    (request) => {
        const { accessToken } = localStorage
        if (accessToken) {
            request.headers = {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.accessToken
            }
        }
        return request;
    },
    (error) => {
        console.error({ error })
        return Promise.reject(error)
    }
)

netClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            localStorage.removeItem('accessToken');
            router.push('/login');
        }
        return Promise.reject(error)
    }
)

export default netClient;