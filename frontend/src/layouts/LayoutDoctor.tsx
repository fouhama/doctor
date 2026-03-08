import type { ReactNode } from "react"
import NavbarDoctor from "../components/doctor/NavbarDoctor"
import { useDoctorContext } from "../context/DoctorContext"

import Sidebar from "../components/doctor/Sidebar"
import Loading from "../components/doctor/Loading"

const LayoutDoctor = ({ children }: { children: ReactNode }) => {
    const { isLoading, isLoggedIn } = useDoctorContext()
    return (
        <div className="min-h-screen bg-layout-doctor ">

            <div className="z-index-12 min-h-screen">
                <NavbarDoctor />

                        <>

                            {isLoggedIn ?
                                (
                                    <div className="grid grid-cols-[1fr_30fr]">
                                        <Sidebar/>
                                        {children}
                                    </div>
                                ) : children}

                        </>

                {isLoading &&  (<Loading />)}
            </div>
        </div>
    )
}
export default LayoutDoctor