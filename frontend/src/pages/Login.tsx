
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div className="min-h-screen  flex flex-col justify-center items-center ">
            <Link to='/' className="absolute top-2.5 right-2.5 hover:border border-slate-300 cursor-pointer rounded-md p-4">
              <IoHome className="text-2xl"/>
            </Link>
            <div className="border p-10 border-slate-300 shadow-2xs rounded-md  w-lg bg-white " >

                <form className="flex flex-col gap-5">
                    <h2 className="text-3xl  font-bold text-center">Login</h2>
                    <label className="font-bold text-gray-700 " >
                        Email
                        <input type="text" placeholder="example@gmail.com" className="border rounded border-slate-300 outline-slate-500 p-3 font-normal w-full" />
                    </label>
                    <label className="font-bold text-gray-700" >
                        Password
                        <input autoComplete="off" type="password" placeholder="********" className="border rounded border-slate-300 outline-slate-500 p-3   font-normal w-full" />
                    </label>
                    <span className="flex justify-end">
                        <button type="button" className="bg-slate-500 font-bold text-xl py-3 px-4 text-white cursor-pointer rounded-md">Login</button>
                    </span>
                </form>
            </div>
        </div>
    )
}
export default Login