import { FaComputer, FaApple, FaAndroid } from "react-icons/fa6";
import { SiPlaystation, SiXbox, SiNintendo } from "react-icons/si";

export const plataform = {
    pc: <FaComputer size={20} className="fill-orange-500" />,
    ps: <SiPlaystation size={20} className="fill-blue-500" />,
    xbox: <SiXbox size={20} className="fill-green-500" />,
    nintendo: <SiNintendo size={20} className="fill-red-500" />,
    iOS: <FaApple size={20} />,
    android: <FaAndroid size={20} className="fill-green-800" />,
}
