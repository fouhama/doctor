
import { useState } from "react"
import { IoHome, IoLogOutOutline } from "react-icons/io5"
import { Link, useNavigate } from "react-router-dom"
import * as apiDoctor from '../../api-doctor'
import toast from "react-hot-toast"
import { useDoctorContext } from "../../context/DoctorContext"

const NavbarDoctor = () => {
    const { isLoggedIn, setIsLoading, checkTokenStatus } = useDoctorContext()
    const navigate = useNavigate()
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const handleLogout = async () => {
        try {
            setIsLoggingOut(true);
            setIsLoading(true);
            
            await apiDoctor.logout();
            
            toast.success('Déconnexion réussie');
            
            // Check token to update isLoggedIn state
            await checkTokenStatus();
            
            navigate('/login');
        } catch {
            toast.error('Erreur lors de la déconnexion');
            // Still navigate to login and check token status
            await checkTokenStatus();
            navigate('/login');
        } finally {
            setIsLoggingOut(false);
            setIsLoading(false);
        }
    }


    return (
        <nav className="p-4 flex justify-between items-center sticky top-0 px-10 bg-transparent shadow-2xs">
            <Link to={'/'} className="tracking-tighter text-3xl  font-bold text-slate-500">Doctor.com</Link>

            <span className="flex gap-2">
                {isLoggedIn ? (
                    <>
                        <Link to='/' className="  hover:border border-slate-300 cursor-pointer rounded-md p-2">
                            <IoHome className="text-2xl" />
                        </Link>
                        <button onClick={handleLogout} disabled={isLoggingOut} className="hover:border border-slate-300 rounded-md  cursor-pointer font-semibold text-gray-700 p-2 disabled:opacity-50 disabled:cursor-not-allowed"><IoLogOutOutline className="font-bold" size={25} title="déconnexion" /></button>

                    </>
                ) :
                    (
                        <Link to='/' className="  hover:border border-slate-300 cursor-pointer rounded-md p-2">
                            <IoHome className="text-2xl" />
                        </Link>
                    )

                }

            </span>
        </nav>
    )
}
export default NavbarDoctor