import type { FormSubmitType } from "./pages/client/Appointment"
import api from "./api/axios"




export const getCsrfToken = async () => {
   await api.get('/sanctum/csrf-cookie')

}

export const addAppointment = async (fromAppointment: FormSubmitType) => {
   await getCsrfToken()

   const res = await api.post('/api/add-appointment', fromAppointment)
   return res.data;
}

export const getDateExist = async () => {
   await getCsrfToken()
   const res = await api.post('/api/get-date-exist')
   return  res.data
}
export const getTimeExist = async (date: Date) => {
   await getCsrfToken()
   const res = await api.post('/api/get-time-exist', {date})
   return  res.data
}
