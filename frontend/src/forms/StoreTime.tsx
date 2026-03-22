import {
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "../components/ui/dialog"
import { Field, FieldError, FieldGroup } from "../components/ui/field"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Button } from "../components/ui/button"
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import * as apiDoctor from "../api-doctor"
import toast from "react-hot-toast";
export type formStoreTime = {
    time: string,
    person: number
}

const StoreTime = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<formStoreTime>()

    const closeBtnRef = useRef<HTMLButtonElement | null>(null)
    const [isPending, setIsPending] = useState(false)

    const onSubmit = async (data: formStoreTime) => {
        try {
            setIsPending(true)
            await apiDoctor.storeTime(data)
            toast.success("Temps ajouté avec succès")
            closeBtnRef.current?.click()
        } catch (error: unknown) {
            const errorMessage = (error as { response?: { data?: { message?: string } } })?.response?.data?.message || "Une erreur est survenue"
            toast.error(errorMessage)
        } finally {
            setIsPending(false)
        }
    }

    return (

        <DialogContent className="sm:max-w-sm">
            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogHeader>
                    <DialogTitle>Ajouter du temps</DialogTitle>
                    <DialogDescription>
                        ajouter du temps avec combien des personnes dans ce temps
                    </DialogDescription>
                </DialogHeader>
                <FieldGroup>
                    <Field>
                        <Label htmlFor="temps">Temps</Label>
                        <Input
                            id="temps"
                            type="time"
                            defaultValue="09:00"
                            {...register('time', { required: 'Time is required' })}
                        />

                        {errors.time?.message && (
                            <FieldError errors={[{ message: errors.time.message }]} />
                        )}
                    </Field>
                    <Field>
                        <Input
                            id="countPerson"
                            type="number"
                            defaultValue={3}
                            {...register('person', {
                                required: 'Number of persons is required',
                                valueAsNumber: true,
                                min: { value: 1, message: 'Minimum 1 person' }
                            })}
                        />

                        {errors.person?.message && (
                            <FieldError errors={[{ message: errors.person.message }]} />
                        )}

                    </Field>
                </FieldGroup>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Annuler</Button>
                    </DialogClose>
                    {/* hidden close button used to programmatically close the dialog on success */}
                    <DialogClose asChild>
                        <button ref={closeBtnRef} style={{ display: 'none' }} aria-hidden />
                    </DialogClose>
                    <Button type="submit" disabled={isPending}>{isPending ? 'Ajout...' : 'Ajouter'}</Button>
                </DialogFooter>
            </form>
        </DialogContent>
    )
}
export default StoreTime