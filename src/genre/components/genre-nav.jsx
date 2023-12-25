import { Link } from 'react-router-dom'

export const GenreNav = () => {
    return (
        <nav className="mt-5 mx-2 grid grid-cols-2 lg:grid-cols-5 justify-around gap-4 p-2 text-center bg-slate-400 rounded-xl font-semibold">
            <Link to="/sports" className="py-2 px-4 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition duration-300">SPORTS</Link>
            <Link to="/shooters" className="py-2 px-4 rounded-md bg-slate-700 text-white hover:bg-slate-800 transition duration-300">SHOOTERS</Link>
            <Link to="/adventure" className="py-2 px-4 rounded-md bg-yellow-500 text-white hover:bg-yellow-600 transition duration-300">ADVENTURE</Link>
            <Link to="/strategy" className="py-2 px-4 rounded-md bg-red-500 text-white hover:bg-red-600 transition duration-300">STRATEGY</Link>
            <Link to="/mmo" className="py-2 px-4 rounded-md bg-green-500 text-white hover:bg-green-600 transition duration-300">MMO</Link>
        </nav>


    )
}
