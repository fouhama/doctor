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

export const getAppointemnts = async (size: number = 10, page: number = 1, search: string, date: string = "1") => {
    const query =new URLSearchParams()
    query.append('page', page.toString())
    query.append('size', size.toString())
    query.append('search', search)
    query.append('dateAppointment', date)
    const res = await api.get(`/api/get-apointments?${query.toString()}`)
    return res.data
}