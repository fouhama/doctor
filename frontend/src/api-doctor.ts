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