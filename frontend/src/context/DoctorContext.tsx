import { createContext, useContext, type ReactNode } from "react"

type DoctorContextType = {
    isLoggedIn :boolean
}


const ContextDoctor = createContext<DoctorContextType | undefined>(undefined)


const DoctorContext = ({ children }: { children: ReactNode }) => {
    const isLoggedIn  =false
    return (
        <ContextDoctor.Provider value={{isLoggedIn}}>
            {children}
        </ContextDoctor.Provider>

    )


}
export const useDoctorContext = () => {
    const context = useContext(ContextDoctor)
    return  context as DoctorContextType
}

export default  DoctorContext