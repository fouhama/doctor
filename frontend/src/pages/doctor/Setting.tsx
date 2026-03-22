
import { CiPause1, CiEdit, CiTrash } from "react-icons/ci";
import { Button } from "../../components/ui/button"
import {Dialog, DialogTrigger} from "../../components/ui/dialog"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../../components/ui/accordion"
import { ButtonGroup } from "../../components/ui/button-group";
import StoreTime from "../../forms/StoreTime";
import { FaCirclePlus } from "react-icons/fa6";
const Setting = () => {

    return (
        <div className="my-3  w-full">
            <div className="bg-white mx-3 p-5 rounded-md">
                <h2 className="font-bold text-2xl mb-3  text-slate-500 ml-0.5">Rendez-vous</h2>

                <div className=" border border-slate-300 py-2 px-4 rounded-md ">
                    <Accordion
                        type="single"
                        collapsible
                        defaultValue="shipping"
                        className="w-full "
                    >
                        <AccordionItem value="shipping" >
                            <AccordionTrigger className="font-bold">Modifier les heures</AccordionTrigger>
                            <AccordionContent>
                                <div >
                                    <Dialog>

                                        <div className="flex justify-end mt-2" >

                                            <DialogTrigger asChild >
                                                <Button variant="outline"><FaCirclePlus /> Ajouter</Button>
                                            </DialogTrigger>
                                        </div>
                                        <StoreTime />
                                    </Dialog>
                                    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 p-5">
                                        <span className="border border-slate-300 rounded-xl overflow-hidden font-semibold flex justify-between items-center ps-3">
                                            <span className="text-nowrap">9:00 (3 Personnes)</span>
                                            <ButtonGroup className="">
                                                <Button variant="outline" className="border-none rounded-none" title="Modifier"><CiEdit /></Button>
                                                <Button variant="outline" className="border-none rounded-none" title="Suspendu"> <CiPause1 /></Button>
                                                <Button variant="outline" className="border-none rounded-none" title="Supprimer"> <CiTrash /></Button>
                                            </ButtonGroup>

                                        </span>


                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="returns">
                            <AccordionTrigger>What is your return policy?</AccordionTrigger>
                            <AccordionContent>
                                Returns accepted within 30 days. Items must be unused and in original
                                packaging. Refunds processed within 5-7 business days.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="support">
                            <AccordionTrigger>How can I contact customer support?</AccordionTrigger>
                            <AccordionContent>
                                Reach us via email, live chat, or phone. We respond within 24 hours
                                during business days.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>


                </div>
            </div>

        </div>
    )
}
export default Setting