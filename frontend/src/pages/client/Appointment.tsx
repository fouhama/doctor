import { useState } from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"
import * as apiClinet from "../../api-client"

import toast from 'react-hot-toast';
const availableTimes = [
    "09:00",
    "10:00",
    "11:00",
    "14:00",
    "15:00",
    "16:00",
]


export type FormSubmitType = {
    firstName: string,
    lastName: string,
    phone: string,
    idCart: string,
    date: string,
    time: string

}
const Appointment = () => {
 

    const { mutate , isPending } = useMutation({
        mutationFn: apiClinet.addAppointment,
        onSuccess: () => {
            toast.success("Rendez-vous enregistré ✔️")
            reset()
            setTime(null)
            setDate(null)
        },
        onError: () => {
            toast.error("Erreur ❌")
            
        }
    })

    const getTime = useMutation({
        mutationFn: apiClinet.getTimeExist,
        onSuccess: () => {
            toast.success("Sélectionnez l'heure ✔️")
        },
        onError: () => {
            toast.error("Erreur ❌")
            
        }
    })
    const [date, setDate] = useState<Date | null>(null)
    const [time, setTime] = useState<string | null>(null)

    const handleDateChange = (value: Date) => {
        setTime(null) 
        setDate(value)
        getTime.mutate(value)
        setValue('date', value.toISOString())
        setValue('time', '')

    }

    const handleTimeSelect = (time: string) => {
        setTime(time)
        setValue('time', time)
    }


    const { register, handleSubmit, setValue

        , formState: { errors }, reset  } = useForm<FormSubmitType>()
    const onSubmit = handleSubmit(data => {
        mutate(data)
  

    })

    return (
        <div className="py-30 -mt-17.5 min-h-screen px-2">
            <h2 className="text-2xl font-bold mb-5 text-gray-700">
                RENDEZ-VOUS
            </h2>

            <form className="flex flex-col gap-5" onSubmit={onSubmit}>
                <input type="hidden" {...register('date', { required: 'la date est requise' })} />
               
                <input type="hidden" {...register('time', { required: 'le temps est nécessaire' })} />
                {/* name */}
                <div className="flex gap-5 flex-col md:flex-row">
                    <label className="w-full font-semibold text-gray-700">
                        Prénom
                        <input
                            {...register('firstName', { required: "this field is required" })}
                            type="text"
                            placeholder="Prénom"
                            className="border rounded border-slate-300 outline-slate-500 p-3 font-normal w-full"
                        />

                        {errors.firstName && (<span className="text-red-500 text-xs front-bold">{errors.firstName.message}</span>)}
                    </label>

                    <label className="w-full font-semibold text-gray-700">
                        Nom de famille
                        <input


                            {...register('lastName', { required: "this field is required" })}
                            type="text"
                            placeholder="Nom de famille"
                            className="border rounded border-slate-300 outline-slate-500 p-3 font-normal w-full"
                        />
                        {errors.lastName && (<span className="text-red-500 text-xs front-bold">{errors.lastName.message}</span>)}
                    </label>
                </div>

                {/* phone + id */}
                <div className="flex gap-5 flex-col md:flex-row">
                    <label className="w-full font-semibold text-gray-700">
                        Téléphone
                        <input
                            {...register('phone', {
                                required: "ce champ est requis",
                                minLength: { value: 10, message: "numéro de téléphone incorrect" },
                                maxLength: { value: 10, message: "numéro de téléphone incorrect" },
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: "doit être un numéro"
                                }
                            })}
                            type="text"
                            placeholder="060000000"
                            className="border rounded border-slate-300 outline-slate-500 p-3 font-normal w-full"
                        />
                        {errors.phone && (<span className="text-red-500 text-xs front-bold">{errors.phone.message}</span>)}
                    </label>

                    <label className="w-full font-semibold text-gray-700">
                        Numéro Carte nationale (ID)
                        <input
                            {...register('idCart', { required: "this field is required" })}
                            type="text"
                            placeholder="ID4545"
                            className="border rounded border-slate-300 outline-slate-500 p-3 font-normal w-full"
                        />
                        {errors.idCart && (<span className="text-red-500 text-xs front-bold">{errors.idCart.message}</span>)}
                    </label>
                </div>

                {/* date + time */}
                <div className="flex gap-5 flex-col md:flex-row">

                    {/* calendar */}
                    <label className="w-full font-semibold text-gray-700 flex flex-col">
                        Date de rendez-vous

                        <Calendar
                            selectRange={false}
                            onChange={(value) => handleDateChange(value as Date)}
                            value={date}
                            locale="fr-FR"
                            minDate={new Date()}
                            tileDisabled={({ date, view }) =>
                                view === "month" &&
                                (date.getDay() === 0 || date.getDay() === 6)
                            }
                        />
                        {errors.date && (<span className="text-red-500 text-xs front-bold">{errors.date.message}</span>)}
                    </label>

                    {/* time */}
                    <div className="w-full font-semibold text-gray-700 flex flex-col">
                        Heures

                        {date && (
                            <div className="mt-5 flex flex-wrap gap-2">
                                {availableTimes.map((t) => (
                                    <button
                                        type="button"
                                        key={t}
                                        onClick={() => handleTimeSelect(t)}
                                        className={`px-4 py-2 rounded border transition cursor-pointer ${time === t
                                            ? "bg-green-600 text-white"
                                            : "bg-gray-200 hover:bg-gray-300"
                                            }`}
                                    >
                                        {t}
                                    </button>
                                ))}
                                {errors.time && (<span className="text-red-500 text-xs front-bold">{errors.time.message}</span>)}
                            </div>
                        )}

                        {/* result */}
                        {date && time  && (
                            <p className="mt-4 font-medium text-green-700">
                                Rendez-vous : {date.toLocaleDateString("fr-FR")} à {time}
                            </p>
                        )}
                    </div>
                </div>

                {/* submit */}
                <span className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition w-fit font-bold cursor-pointer disabled:bg-gray-300"
                        disabled={isPending}
                    >
                        {isPending ? 'Confirmation...' : 'Confirmer rendez-vous'}
                        
                    </button>
                </span>


            </form>
        </div>
    )
}

export default Appointment