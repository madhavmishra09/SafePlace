import { useState } from "react";
export default function ChatLine() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className="font-robotomono text-white">
                <h1 className="text-[35px]">SafePlace</h1>
                <ul>
                    <li><a href="./login.jsx">Login</a></li>
                    <li><a href=""></a></li>
                    <li><a href=""></a></li>
                    <li><a href=""></a></li>
                </ul>
            </nav>
        </>
    )
}