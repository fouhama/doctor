import { RiExpandUpDownFill } from "react-icons/ri";
const Appointments = () => {
    return (
        <div className="px-5 py-5   w-full">
            <div className="bg-white w-full rounded-lg shadow-lg p-5 overflow-x-auto">
                <table className=" min-w-full bg-white rounded-lg overflow-hidden shadow">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="px-6 py-3 "><span className="flex justify-between items-center"><span>ID</span> <RiExpandUpDownFill /></span></th>
                            <th className="px-6 py-3 "><span className="flex justify-between items-center"><span>Nom et prénom </span> <RiExpandUpDownFill /></span></th>
                            <th className="px-6 py-3 "> <span className="flex justify-between items-center"><span>Date</span> <RiExpandUpDownFill /></span></th>
                            <th className="px-6 py-3 ">Action </th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        <tr className="border-b hover:bg-gray-100">
                            <td className="px-6 py-4 font-semibold">Ak154545</td>
                            <td className="px-6 py-4">Tariq</td>
                            <td className="px-6 py-4">tariq@mail.com</td>
                            <td className="px-6 py-4 text-green-600 font-semibold text-center">Active</td>
                        </tr>

                        <tr className="border-b hover:bg-gray-100">
                            <td className="px-6 py-4 font-semibold">Ak56445</td>
                            <td className="px-6 py-4">Ali</td>
                            <td className="px-6 py-4">ali@mail.com</td>
                            <td className="px-6 py-4 text-red-500 font-semibold text-center">Blocked</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Appointments