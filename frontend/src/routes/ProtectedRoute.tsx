import { Navigate } from "react-router-dom"
import {useDoctorContext}  from "../context/DoctorContext"
import type { ReactNode } from "react"

const ProtectedRoute = ({children} : { children :ReactNode})=>{
       const  {isLoggedIn} =useDoctorContext()
    if (!isLoggedIn) {
        return <Navigate to="/login" replace />
    }
    return children

}
export default ProtectedRoute