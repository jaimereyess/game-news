import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { SiPlaystation, SiXbox, SiNintendo } from "react-icons/si";
import './links.css'

const links = [
    {
        name: "",
        icon: <FaHome size={30} />,
        color: "purple",
        bg: "bg-purple-400 hover:bg-purple-500",
    },
    {
        name: "pc",
        icon: <FaComputer size={30} />,
        color: "yellow",
        bg: "bg-yellow-400 hover:bg-yellow-500",
    },
    {
        name: "playstation",
        icon: <SiPlaystation size={30} />,
        color: "blue",
        bg: "bg-blue-400 hover:bg-blue-500",
    },
    {
        name: "xbox",
        icon: <SiXbox size={30} />,
        color: "green",
        bg: "bg-green-400 hover:bg-green-500",
    },
    {
        name: "nintendo",
        icon: <SiNintendo size={30} />,
        color: "red",
        bg: "bg-red-400 hover:bg-red-500",
    },
]

export const NavBar = () => {
    return (
        <nav className="grid grid-cols-5 gap-5">

            {links.map(link => (
                <Link key={link.name} to={`/${link.name}`}
                    className={`link-button link-${link.color} ${link.bg}
                    rounded-lg flex items-center justify-center py-2
                    transition duration-300`}>
                    {link.icon}
                </Link>
            ))}
        </nav>
    )
}


