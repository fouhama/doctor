import type { FormSubmitType } from "./pages/client/Appointment"

const URL_BACK = import.meta.env.VITE_API_URL_BACK
export const addAppointment = async (fromAppointment: FormSubmitType) => {
    const response = await fetch(`${URL_BACK}/api/add-appointment`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(fromAppointment)
    })
    if (!response.ok) {
        throw new Error("Champ pour réserver un rendez-vous")
    }

    return  response.json()
}