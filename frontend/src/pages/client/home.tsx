import { Link } from "react-router-dom"
import  homeImage from "../../../public/home-image.png"
const Home = () => {
    return (
        <div className="h-full flex-col items-center gap-5  ">
            <div className="flex gap-12 ">
                <div className="max-w-2xl flex flex-col gap-12  text-slate-700 mt-40">
                    <h2 className="text-5xl font-bold  tracking-tight "> Reservation</h2>
                    <p className="font-semibold ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus exercitationem fugiat animi enim, illum numquam quis autem! Iste nobis facilis in dolorem perspiciatis? Nemo eius hic aspernatur quo eos, exercitationem quod quasi totam mollitia facere odit nobis molestias consequatur ea iure. Corrupti nemo totam fugiat ex quaerat quam voluptatum rerum labore illo quo, inventore sit modi architecto ab deleniti! Eius!</p>
                    <Link to="/get-reservation" className="bg-slate-200 font-bold  text-3xl py-3 px-5 rounded hover:bg-slate-300 w-fit">Rondez-vous</Link>
                </div>
                <div className="">
                    <img src={homeImage} alt="image" />
                </div>
            </div>
        </div>
    )
}
export  default Home