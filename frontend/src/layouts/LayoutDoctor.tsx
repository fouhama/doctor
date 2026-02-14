import type { ReactNode } from "react"


const LayoutDoctor = ({ children }: { children: ReactNode }) => {
    return (
        <div className="max-h-screen bg-layout-doctor">
         
            <div className="">
                {children}
            </div>
        </div>
    )
}
export default LayoutDoctor