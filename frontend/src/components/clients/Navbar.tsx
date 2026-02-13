import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="p-4 flex justify-between items-center sticky top-0 px-10 bg-white shadow-2xs">
            <Link to={'/'} className="tracking-tighter text-3xl  font-bold text-slate-500">Doctor.com</Link>
            <span className="flex gap-4">
                <Link  to="/contact-us" className="hover:underline">Conatct-us</Link>
                <Link  to="/login" className="hover:underline">Login</Link>
            </span>
        </nav>
    )
}
export  default Navbar