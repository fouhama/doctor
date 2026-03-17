import { RiExpandUpDownFill } from "react-icons/ri";
import { getAppointemnts } from '../../api-doctor'
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { FaEdit, FaRegFolder, FaRegTrashAlt, FaSearch } from "react-icons/fa";

type Appointment = {
    id: number,
    first_name: string,
    last_name: string,
    phone: string,
    id_card: string,
    date: string,
    time: string,
    created_at: string,
    updated_at: string
}

type ResponseAppointment = {
    data: Appointment[]
    total: number
    pages: number
    current_page: number
}
function formatDate(dateString: string) {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}


const Appointments = () => {
    const [appoitments, setAppoitments] = useState<ResponseAppointment>()
    const [loading, setLoading] = useState<boolean>(true)
    const [currentpage, setCurrentpage] = useState<number>(1)
    const [sizePage, setSizePage] = useState<number>(10)
    const [search, setSearch] = useState<string>('')
    const [dateAppointment, setDateAppointment] = useState<string>('1')
    const [searchInput, setSearchInput] = useState<string>('')


    useEffect(() => {
        const fetchAppointments = async () => {
            setLoading(true)
            setAppoitments(undefined)
            const data = await getAppointemnts(sizePage, currentpage, search, dateAppointment)
            setAppoitments(data)

            setLoading(false)
        }

        fetchAppointments()
    }, [currentpage, sizePage, search, dateAppointment])

    const handelSearch = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault()
        setSearch(searchInput)

    }
    const handelSearchInput =(value :string)=>{
        if (value.length == 0) {
            setSearch('')
        }
        setSearchInput(value)
    }
    return (
        <div className="px-5 py-5 w-full">
            <div className="bg-white w-full rounded-lg shadow-lg p-5 overflow-x-auto">
                <h2 className="text-2xl font-bold text-slate-400 mb-3">Rendez-vous</h2>
                <div className="flex justify-between">
                    <div className="flex gap-3 items-center">
                        <label className="flex gap-2 items-center mb-2 font-semibold">
                            Sizes:
                            <select className="border border-slate-300 py-1 px-2 rounded-md  outline-none" onChange={(event) => setSizePage(Number(event.target.value))}>
                                <option value="10" selected>10</option>
                                <option value="30">30</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                        </label>
                        <label className="flex gap-2 items-center mb-2 font-semibold">
                            Date Rendez-vous:
                            <select className="border border-slate-300 py-1 px-3 rounded-md  outline-none " onChange={(event) => setDateAppointment(event.target.value)}>
                                <option value="all" >Tous les jours</option>
                                <option value="1" selected>Aujourd'hui</option>
                                <option value="3">3 Jours</option>
                                <option value="7">Semaine</option>
                                <option value="30">Mois</option>
                            </select>
                        </label>
                    </div>
                    <div className="min-w-2xs">
                        <form onSubmit={handelSearch} className="flex items-center gap-2 border border-slate-300 rounded-md px-3 py-1 ">
                            <input type="text" className="border-none outline-none w-full" placeholder="Chercher" value={searchInput}
                                onChange={(e) => handelSearchInput(e.target.value)} />
                            <button type="submit" className="cursor-pointer"><FaSearch /></button>
                        </form>
                    </div>
                </div>
                <table className="min-w-full bg-white rounded-lg overflow-hidden shadow">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="px-6 py-3"><span className="flex justify-between items-center"><span>ID</span></span></th>
                            <th className="px-6 py-3"><span className="flex justify-between items-center"><span>Nom et prénom </span></span></th>
                            <th className="px-6 py-3"><span className="flex justify-between items-center"><span>Téléphone</span></span></th>
                            <th className="px-6 py-3"><span className="flex justify-between items-center"><span>Rendez-vous</span> <RiExpandUpDownFill /></span></th>
                            <th className="px-6 py-3"><span className="flex justify-between items-center"><span>Création </span> <RiExpandUpDownFill /></span></th>
                            <th className="px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {loading && (
                            <tr>
                                <td colSpan={7} className="text-center py-4">
                                    <div className="flex justify-center">
                                        <RotatingLines
                                            visible={true}
                                            height="50"
                                            width="50"
                                            color="grey"
                                            strokeWidth="5"
                                            animationDuration="0.75"
                                            ariaLabel="rotating-lines-loading"
                                        />
                                    </div>
                                </td>
                            </tr>
                        )}
                        {appoitments && appoitments.data.length > 0 ? appoitments?.data.map((appoint) => (
                            <tr className="border-b hover:bg-gray-100" key={appoint.id}>
                                <td className="px-6 py-4 font-semibold uppercase">{appoint.id_card}</td>
                                <td className="px-6 py-4 font-semibold uppercase">{appoint.first_name} {appoint.last_name}</td>
                                <td className="px-6 py-4 font-semibold lowercase">{appoint.phone}</td>
                                <td className="px-6 py-4 font-semibold lowercase" >{appoint.date} {appoint.time}</td>
                                <td className="px-6 py-4 font-semibold lowercase">{formatDate(appoint.created_at)}</td>
                                <td className="px-6 py-4">
                                    <div className="flex gap-2 items-center justify-center">
                                        <button className="bg-amber-400 text-white font-bold hover:bg-amber-500 p-2  rounded-md w-fit cursor-pointer" title="Dossier" ><FaRegFolder /></button>
                                        <button className="bg-green-400 text-white font-bold hover:bg-green-500 p-2  rounded-md w-fit cursor-pointer" title="Modifier"><FaEdit /></button>
                                        <button className="bg-red-400 text-white font-bold hover:bg-red-500 p-2  rounded-md w-fit cursor-pointer" title="Supprimer"><FaRegTrashAlt /></button>
                                    </div>
                                </td>
                            </tr>
                        )) : (!loading && (<tr> <td colSpan={7} className="text-center py-3 font-bold"> Aucune donnée ! </td></tr>))}
                    </tbody>
                    {!loading && (
                        <tfoot >
                            <tr>
                                <td className="p-2 font-bold" colSpan={7}>Count:  {appoitments?.data.length || 0} </td>
                            </tr>
                        </tfoot>
                    )}
                </table>
                <div className="my-4 w-full flex justify-center">
                    <ul className="bg-slate-100  flex" >

                        {Array.from({ length: appoitments?.pages || 0 }).map((_, page) => (
                            <li onClick={() => {
                                if (currentpage !== (page + 1)) {
                                    setCurrentpage(page + 1)
                                }
                            }} className={`border  cursor-pointer py-1 px-3 border-slate-300 ${(page + 1) === currentpage ? 'bg-slate-500' : ''}`} key={page}>{page + 1}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Appointments