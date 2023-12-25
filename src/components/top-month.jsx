import { FaComputer } from "react-icons/fa6";
import { SiPlaystation, SiXbox, SiNintendo } from "react-icons/si";

const games = [
    {
        name: "LEGO Fortnite",
        pc: true,
        ps: true,
        xbox: true,
        nintendo: true
    },
    {
        name: "Ready or Not",
        pc: true,
        ps: false,
        xbox: false,
        nintendo: false
    },
    {
        name: "Avatar: Frontiers of Pandora",
        pc: true,
        ps: true,
        xbox: true,
        nintendo: false
    },

    {
        name: "Rocket Racing",
        pc: true,
        ps: true,
        xbox: true,
        nintendo: true
    },
    {
        name: "EA Sports FC 24",
        pc: true,
        ps: true,
        xbox: true,
        nintendo: true
    }
]

export const TopMonth = () => {
    return (
        <div className="max-w-lg mx-auto">

            <div className="bg-white rounded-lg border border-gray-200  text-gray-900 text-sm font-medium">
                <span aria-current="true" className="block px-4 py-2 border-b border-gray-200 text-center
                rounded-t-lg bg-blue-700 text-white">
                    Games of the month
                </span>

                {games.map(game => (
                    <span key={game.name} className="block px-4 py-2 border-b border-gray-200 w-full
                        hover:bg-gray-100 hover:text-blue-700 cursor-default">
                        {game.name}
                        <div className="flex gap-3 float-end">
                            {game.pc && (<FaComputer size={20} className="fill-yellow-600" />)}
                            {game.ps && (<SiPlaystation size={20} className="fill-blue-800" />)}
                            {game.xbox && (<SiXbox size={20} className="fill-green-800" />)}
                            {game.nintendo && (<SiNintendo size={20} className="fill-red-800" />)}
                        </div>
                    </span>
                ))}


            </div>

        </div>
    );
};
