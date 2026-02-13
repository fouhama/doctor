import type { ReactNode } from "react"
import Navbar  from "../components/clients/Navbar"

const LayoutClient = ({ children }: { children : ReactNode}) => {
    return (
        <div className="min-h-screen ">
            <Navbar />
            <div className="container mx-auto">
                {children}
            </div>
        </div>
    )
}
export  default  LayoutClient