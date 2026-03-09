import { RiExpandUpDownFill } from "react-icons/ri";
import { getAppointemnts } from '../../api-doctor'
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { FaSearch } from "react-icons/fa";

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

const Appointments = () => {
    const [appoitments, setAppoitments] = useState<ResponseAppointment>()
    const [loading, setLoading] = useState<boolean>(true)
    const [currentpage, setCurrentpage] = useState<number>(1)



    useEffect(() => {
        getAppointemnts().then((data) => {
            setAppoitments(data)
            setLoading(false)
        })
    }, [])


    return (
        <div className="px-5 py-5 w-full">
            <div className="bg-white w-full rounded-lg shadow-lg p-5 overflow-x-auto">
                <h2 className="text-2xl font-bold text-slate-400 mb-3">Rendez-vous</h2>
                <div className="flex justify-between">
                    <label className="flex gap-2 items-center mb-2">
                        Sizes:
                        <select className="border border-slate-300 py-1 px-2 outline-none">
                            <option value="10">10</option>
                            <option value="30">30</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                    </label>
                    <div className="min-w-2xs">
                        <label className="flex items-center gap-2 border border-slate-300 rounded-md px-3 py-1 ">
                            <input type="text" className="border-none outline-none w-full" placeholder="Chercher" />
                            <button type="button" className="cursor-pointer"><FaSearch /></button>
                        </label>
                    </div>
                </div>
                <table className="min-w-full bg-white rounded-lg overflow-hidden shadow">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="px-6 py-3"><span className="flex justify-between items-center"><span>ID</span> <RiExpandUpDownFill /></span></th>
                            <th className="px-6 py-3"><span className="flex justify-between items-center"><span>Nom et prénom </span> <RiExpandUpDownFill /></span></th>
                            <th className="px-6 py-3"><span className="flex justify-between items-center"><span>Date</span> <RiExpandUpDownFill /></span></th>
                            <th className="px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {loading && (
                            <tr>
                                <td colSpan={4} className="text-center py-4">
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
                                <td className="px-6 py-4 font-semibold">{appoint.id_card}</td>
                                <td className="px-6 py-4">{appoint.first_name} {appoint.last_name}</td>
                                <td className="px-6 py-4">{appoint.created_at}</td>
                                <td className="px-6 py-4 text-green-600 font-semibold text-center">Active</td>
                            </tr>
                        )) : (!loading && (<tr> <td colSpan={4} className="text-center"> Aucune donnée ! </td></tr>))}
                    </tbody>
                </table>
                <div className="my-4 w-full flex justify-center">
                    <ul className="bg-slate-100  flex" >
     
                        {Array.from({length: appoitments?.pages || 0}).map((_, page) => (
                            <li className={`border  cursor-pointer py-1 px-3 border-slate-300 ${(page +1 ) === currentpage ? 'bg-slate-500' : ''}`} key={page}>{page + 1}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Appointments