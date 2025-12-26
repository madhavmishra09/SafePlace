import { useState } from "react";
export default function ChatLine() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className="font-robotomono text-white p-[1px] m-[1px] flex flex-row justify-evenly">
                <h1 className="text-[45px]">SafePlace</h1>
                <ul className="flex flex-row p-[10px] m-[1px]">
                    <li className="w-[150px] h-[200px]"><a href="./login.jsx" className="bg-white border-slate-700 text-[30px] text-slate-700 hover:bg-slate-700 hover:text-white duration-250 rounded-[30px] flex justify-evenly">Login</a></li>
                    <li className="w-[150px] h-[200px]"><a href="./signup.jsx" className="bg-white border-slate-700 text-[30px] text-slate-700 hover:bg-slate-700 hover:text-white duration-250 rounded-[30px] flex justify-evenly">Sign Up</a></li>
                    
                </ul>
            </nav>
        </>
    )
}