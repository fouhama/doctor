import { Link } from "react-router-dom"
import { FaUser } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="p-4 flex justify-between items-center sticky top-0 px-10 bg-white shadow-2xs">
            <Link to={'/'} className="tracking-tighter text-3xl  font-bold text-slate-500">Doctor.com</Link>
            <span className="">
                <Link to="/login" className="hover:underline font-semibold text-gray-700"><FaUser size={20}/></Link>
            </span>
        </nav>
    )
}
export  default Navbar