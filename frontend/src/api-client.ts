import type { FormSubmitType } from "./pages/client/Appointment"
import api from "./api/axios"

export const addAppointment = async (fromAppointment: FormSubmitType) => {
   await getCsrfToken()

   const res = await api.post('/api/add-appointment', fromAppointment)
   return res.data;
}


export const getCsrfToken = async () => {
   await api.get('/sanctum/csrf-cookie')

}