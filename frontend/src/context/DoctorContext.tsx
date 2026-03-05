import { createContext, useContext, useState, type ReactNode, useEffect, useCallback } from "react"
import * as apiDoctor from "../api-doctor"


type DoctorContextType = {
    isLoggedIn: boolean,
    isLoading : boolean
    setIsLoading : (type : boolean) => void
    checkTokenStatus: () => Promise<void>
}


const ContextDoctor = createContext<DoctorContextType | undefined>(undefined)


const DoctorContext = ({ children }: { children: ReactNode }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

    const checkTokenStatus = useCallback(async () => {
        try {
            const data = await apiDoctor.checkToken();
            setIsLoggedIn(!!data);
        } catch {
            setIsLoggedIn(false);
        }
    }, [])

    useEffect(() => {
        const initializeAuth = async () => {
            await checkTokenStatus();
        }
        initializeAuth();
    }, [checkTokenStatus])

    return (
        <ContextDoctor.Provider value={{ isLoggedIn, isLoading, setIsLoading, checkTokenStatus }}>
            { children }
        </ContextDoctor.Provider>

    )


}
// eslint-disable-next-line react-refresh/only-export-components
export const useDoctorContext = () => {
    const context = useContext(ContextDoctor)
    return context as DoctorContextType
}
 
export default DoctorContext