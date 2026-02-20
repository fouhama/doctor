import { useState } from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"

const availableTimes = [
    "09:00",
    "10:00",
    "11:00",
    "14:00",
    "15:00",
    "16:00",
]

const Appointment = () => {
    const [date, setDate] = useState<Date | null>(new Date())
    const [time, setTime] = useState<string | null>(null)

    const handleDateChange = (value: Date) => {
        setDate(value)
        setTime(null) // reset time ila tbdel date
    }

    // const appointmentDateTime =
    //     date && time
    //         ? new Date(`${date.toDateString()} ${time}`)
    //         : null

    return (
        <div className="py-30 -mt-17.5 min-h-screen px-2">
            <h2 className="text-2xl font-bold mb-5 text-gray-700">
                RENDEZ-VOUS
            </h2>

            <form className="flex flex-col gap-5">

                {/* name */}
                <div className="flex gap-5 flex-col md:flex-row">
                    <label className="w-full font-semibold text-gray-700">
                        Prénom
                        <input
                            type="text"
                            placeholder="Prénom"
                            className="border rounded border-slate-300 outline-slate-500 p-3 font-normal w-full"
                        />
                    </label>

                    <label className="w-full font-semibold text-gray-700">
                        Nom de famille
                        <input
                            type="text"
                            placeholder="Nom de famille"
                            className="border rounded border-slate-300 outline-slate-500 p-3 font-normal w-full"
                        />
                    </label>
                </div>

                {/* phone + id */}
                <div className="flex gap-5 flex-col md:flex-row">
                    <label className="w-full font-semibold text-gray-700">
                        Téléphone
                        <input
                            type="text"
                            placeholder="060000000"
                            className="border rounded border-slate-300 outline-slate-500 p-3 font-normal w-full"
                        />
                    </label>

                    <label className="w-full font-semibold text-gray-700">
                        Numéro Carte nationale (ID)
                        <input
                            type="text"
                            placeholder="ID4545"
                            className="border rounded border-slate-300 outline-slate-500 p-3 font-normal w-full"
                        />
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
                    </label>

                    {/* time */}
                    <label className="w-full font-semibold text-gray-700 flex flex-col">
                        Heures

                        {date && (
                            <div className="mt-5 flex flex-wrap gap-2">
                                {availableTimes.map((t) => (
                                    <button
                                        type="button"
                                        key={t}
                                        onClick={() => setTime(t)}
                                        className={`px-4 py-2 rounded border transition cursor-pointer ${time === t
                                                ? "bg-green-600 text-white"
                                                : "bg-gray-200 hover:bg-gray-300"
                                            }`}
                                    >
                                        {t}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* result */}
                        {date && time && (
                            <p className="mt-4 font-medium text-green-700">
                                Rendez-vous : {date.toLocaleDateString("fr-FR")} à {time}
                            </p>
                        )}
                    </label>
                </div>

                {/* submit */}
                <span className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition w-fit font-bold cursor-pointer"
                    >
                        Confirmer rendez-vous
                    </button>
             </span>

           
            </form>
        </div>
    )
}

export default Appointment