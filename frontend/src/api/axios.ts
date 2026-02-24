import axios from "axios"
const baseURl = import.meta.env.VITE_API_URL_BACK as string
const api = axios.create({
    baseURL: baseURl || 'http://localhost:8000' ,
    withCredentials: true,
    withXSRFToken: true,
})
export default api