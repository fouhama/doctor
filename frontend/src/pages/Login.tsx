import { useForm } from "react-hook-form";
import { IoHome } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import * as apiDoctor from "../api-doctor";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

type LoginForm = {
    email: string, 
    password: string
}

const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>()

    const { mutate , isPending } = useMutation({
        mutationFn: apiDoctor.login,
        onError: (error: any) => {
            const errorMessage = error?.response?.data?.message || "Quelque chose s'est mal passé !";
            toast.error(errorMessage);
        },
        onSuccess: () => {
            toast.success("Connexion réussie !");
            navigate("/dashboard"); // Change to your desired route
        }
    });

    const onSubmit = handleSubmit(data => {
        mutate(data)
    })

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <Link to='/' className="absolute top-2.5 right-2.5 hover:border border-slate-300 cursor-pointer rounded-md p-4">
                <IoHome className="text-2xl" />
            </Link>
            <div className="border p-10 border-slate-300 shadow-md rounded-md w-lg bg-white">
                <form className="flex flex-col gap-5" onSubmit={onSubmit}>
                    <h2 className="text-3xl font-bold text-center">Login</h2>
                    <label className="font-bold text-gray-700">
                        Email
                        <input type="email" placeholder="example@gmail.com" {...register('email', { required: 'Ce champ est obligatoire' })} className="border rounded border-slate-300 outline-slate-500 p-3 font-normal w-full" />
                        {errors.email && (<span className="text-sm font-bold text-red-500">{errors.email.message}</span>)}
                    </label>
                    <label className="font-bold text-gray-700">
                        Password
                        <input autoComplete="off" type="password" {...register('password', { required: "Ce champ est obligatoire", minLength: { value: 6, message: "doit être supérieur à 6 caractères" } })} placeholder="********" className="border rounded border-slate-300 outline-slate-500 p-3 font-normal w-full" />
                        {errors.password && (<span className="text-sm font-bold text-red-500">{errors.password.message}</span>)}
                    </label>
                    <span className="flex justify-end">
                        <button type="submit" className="bg-slate-500 font-bold text-xl py-3 px-4 text-white cursor-pointer rounded-md " disabled={isPending}>
                            {isPending ? "Login..." : 'Login'}
                        </button>
                    </span>
                </form>
            </div>
        </div>
    )
}

export default Login