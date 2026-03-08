import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as apiDoctor from "../api-doctor";
import toast from "react-hot-toast";
import { useDoctorContext } from "../context/DoctorContext";

type LoginForm = {
    email: string,
    password: string
}

const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>()
    const { setIsLoading, checkTokenStatus } = useDoctorContext()
    const [isPending, setIsPending] = useState(false);

    const onSubmit = handleSubmit(async (data) => {
        try {
            setIsPending(true);
            setIsLoading(true);

            const response = await apiDoctor.login(data);

            // Store the token in cookie
            if (response.token) {
                document.cookie = `auth_token=${response.token}; path=/; max-age=${1 * 24 * 60 * 60}`; // 1 days
            }

            toast.success("Rebienvenue!");

            // Check token to update isLoggedIn state
            await checkTokenStatus();

            navigate("/dashboard");
        } catch (error: unknown) {
            const errorMessage = (error as { response?: { data?: { message?: string } } })?.response?.data?.message || "Quelque chose s'est mal passé !";
            toast.error(errorMessage);
        } finally {
            setIsPending(false);
            setIsLoading(false);
        }
    })

    return (

        <div className="min-h-screen -mt-20 flex flex-col justify-center items-center">

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
                        <button type="submit" className="disabled:bg-slate-500 font-bold text-xl py-3 px-4 text-white cursor-pointer rounded-md bg-blue-600" disabled={isPending}>
                            {isPending ? "Login..." : 'Login'}
                        </button>
                    </span>
                </form >
            </div >



        </div>
    )
}

export default Login