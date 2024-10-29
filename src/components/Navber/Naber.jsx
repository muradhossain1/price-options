import { useState } from "react";
import Links from "../links/Links";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Naber = () => {
    const [open, setOpne] = useState(false)

    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Players", path: "/players" },
        { id: 4, name: "Squad", path: "/squad" },
        { id: 5, name: "Contact", path: "/contact" },
    ];


    return (
        <nav className="text-black bg-gray-200 p-6">
            <div className="md:hidden" onClick={() => setOpne(!open)}>
                {
                    open === true ? 
                    <AiOutlineClose className="text-2xl"></AiOutlineClose> :
                    <AiOutlineMenu className="text-2xl "></AiOutlineMenu>
                }
                
            </div>
            <ul className={`md:flex gap-6 absolute md:static duration-1000 ${open? 'top-16' : '-top-48'} bg-gray-200 px-6 `}>
                {
                    routes.map(route => <Links key={route.id} route={route}></Links>)
                }
            </ul>
        </nav>
    );
};

export default Naber;