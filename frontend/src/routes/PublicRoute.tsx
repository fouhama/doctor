import { Navigate } from "react-router-dom"
import { useDoctorContext } from "../context/DoctorContext"
import type { ReactNode } from "react"

const PublicRoute = ({ children } : { children : ReactNode}) => {
    const  {isLoggedIn} =useDoctorContext()
    if (isLoggedIn) {
      return  <Navigate to='/dashboard' replace />
    }
    return children
}
export default PublicRoute