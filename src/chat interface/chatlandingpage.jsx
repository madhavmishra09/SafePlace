import {useState} from "react";
export default function ChatLandingPage(){
    const [isOpen, setIsOpen]=useState(false);
    return(
        <>
            <section className="font-robotomono text-"><p>Hello, how are you doing today?</p></section>
        </>
    )
}