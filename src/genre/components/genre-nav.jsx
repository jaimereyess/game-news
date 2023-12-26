import { NavLink, useLocation } from 'react-router-dom';


export const GenreNav = () => {

    const location = useLocation()

    const linksConfig = [
        {
            route: '/sports',
            text: 'SPORTS',
            bgColor: 'bg-blue-400 hover:bg-blue-500',
        },
        {
            route: '/shooters',
            text: 'SHOOTERS',
            bgColor: 'bg-slate-600 hover:bg-slate-700',
        },
        {
            route: '/adventure',
            text: 'ADVENTURE',
            bgColor: 'bg-yellow-400 hover:bg-yellow-500',
        },
        {
            route: '/strategy',
            text: 'STRATEGY',
            bgColor: 'bg-red-400 hover:bg-red-500',
        },
        {
            route: '/mmo',
            text: 'MMO',
            bgColor: 'bg-green-400 hover:bg-green-500',
        },
    ];

    return (
        <nav className="mt-5 mx-2 grid grid-cols-2 lg:grid-cols-5 justify-around gap-4 p-2 text-center
        bg-slate-400 rounded-xl font-semibold">
            {linksConfig.map((link) => (
                <NavLink
                    key={link.route}
                    to={link.route}
                    className={`py-2 px-4 rounded-md  transition duration-300
                    ${link.bgColor}
                    ${location.pathname === link.route
                            ? 'text-black'
                            : 'text-white'}`}
                >
                    {link.text}
                </NavLink>
            ))}
        </nav>


    )
}
