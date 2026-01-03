import {useState} from "react";
export default function ChatLandingPage(){
    const [isOpen, setIsOpen]=useState(false);
    return(
        <>
            <section className="font-robotomono text-slate-100 font-bold text-center text-[50px] m-10 p-10 flex justify-center items-center min-h-screen"><p>Hello, how are you doing today?</p></section>
        </>
    )
}