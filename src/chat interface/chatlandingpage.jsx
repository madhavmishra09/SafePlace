import {useState} from "react";
import DashIcon from '../assets/button.png'
export default function ChatLandingPage(){
    const [isOpen, setIsOpen]=useState(false);
    return(
        <>
            <section className="font-robotomono text-slate-100 font-bold text-center text-[45px] m-10 p-10 flex justify-center items-center h-screen relative overflow-hidden">
                <img src={DashIcon} alt="Dash Icon" className="absolute top-4 left-4 w-6 h-6 filter invert"/>
                <p>Hello, how are you doing today?</p>

            </section>
        </>
    )
}