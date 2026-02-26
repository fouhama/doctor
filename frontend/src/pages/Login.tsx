
import { useForm } from "react-hook-form";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
type LoginForm = {
    email: string, 
    password :string
}
const Login = () => {
    const  {register,handleSubmit, formState :{errors}} = useForm<LoginForm>()

    const onSubmit = handleSubmit(data =>{
        console.log(data);
    })
    return (
        <div className="min-h-screen  flex flex-col justify-center items-center ">
            <Link to='/' className="absolute top-2.5 right-2.5 hover:border border-slate-300 cursor-pointer rounded-md p-4">
                <IoHome className="text-2xl" />
            </Link>
            <div className="border p-10 border-slate-300 shadow-md rounded-md  w-lg bg-white " >

                <form className="flex flex-col gap-5 " onSubmit={onSubmit}>
                    <h2 className="text-3xl  font-bold text-center">Login</h2>
                    <label className="font-bold text-gray-700 " >
                        Email
                        <input type="text" placeholder="example@gmail.com" {...register('email', { required: 'Ce champ est obligatoire' })} className="border rounded border-slate-300 outline-slate-500 p-3 font-normal w-full" />
                        {errors.email && (<span className="text-sm  font-bold  text-red-500"> {errors.email.message }</span>)}
                    </label>
                    <label className="font-bold text-gray-700" >
                        Password
                        <input autoComplete="off" type="password" {...register('password', { required: "Ce champ est obligatoire",  minLength : {value : 6 , message: "doit être supérieur à 6 caractères" }})} placeholder="********" className="border rounded border-slate-300 outline-slate-500 p-3   font-normal w-full" />
                        {errors.password && (<span className="text-sm  font-bold  text-red-500"> {errors.password.message}</span>)}
                    </label>
                    <span className="flex justify-end">
                        <button type="submit" className="bg-slate-500 font-bold text-xl py-3 px-4 text-white cursor-pointer rounded-md">Login</button>
                    </span>
                </form>
            </div>
        </div>
    )
}
export default Login