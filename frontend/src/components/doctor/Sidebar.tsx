import { MdDashboard } from "react-icons/md";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";
const Sidebar = () => {
    return (
        <div className=" min-h-screen px-2 py-30 border-r -mt-20  border-r-slate-300">
            <ul className="flex flex-col items-center gap-5">
                <li className="cursor-pointer ">
                    <Link to='/dashboard' className="tooltip">
                        <MdDashboard size={30} />
                        <span className="tooltip-text">Accuel</span>
                    </Link>
                </li>
                <li className="cursor-pointer ">
                    <Link to='/appointment' className="tooltip">
                        <MdOutlineStickyNote2 size={30} />
                        <span className="tooltip-text">Rendez-vous</span>
                    </Link>
                </li>
                <li className="cursor-pointer ">
                    <Link to='/setting' className="tooltip">
                        <IoMdSettings size={30} />
                        <span className="tooltip-text">Paramètre</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
export default Sidebar