import { getCsrfToken } from "./api-client"
import api from "./api/axios"
type formLogin ={
    email :string,
    password:string
}

export const login = async(form :formLogin ) => {
    await getCsrfToken()
    const res = await api.post('/api/login', form)
    return res.data
}

export const logout = async () => {
    const res = await api.post('/api/logout')
    return res
}

export const getUser = async ()=>{
    const res = await api.get('/api/user');
    return  res.data

}

export const getAppointemnts = async () => {
    const res = await api.get('/api/get-apointments')
    return res.data
}