import type { ReactNode } from "react"
import NavbarDoctor from "../components/doctor/NavbarDoctor"
import { useDoctorContext } from "../context/DoctorContext"
import { RotatingLines } from "react-loader-spinner"

const LayoutDoctor = ({ children }: { children: ReactNode }) => {
    const  {isLoading} =useDoctorContext()
    return (
        <div className="min-h-screen bg-layout-doctor ">
         
            <div className="z-index-12 min-h-screen">
                <NavbarDoctor />
                {isLoading ? 
                    <div className="min-h-screen -mt-20 flex flex-col justify-center items-center">
                        <RotatingLines
                            visible={true}
                            height="150"
                            width="150"
                            color="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            ariaLabel="rotating-lines-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        />
                </div>
                   : children}
            </div>
        </div>
    )
}
export default LayoutDoctor