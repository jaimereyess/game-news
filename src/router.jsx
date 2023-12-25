import { Home } from './home'
import { createBrowserRouter } from 'react-router-dom'
import { Sports, Shooters, Adventure, Strategy, Mmo } from './genre/index'
import { Pc, Playstation, Xbox, Nintendo } from './plataforms/index'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        // errorElement: <ErrorPage />
    },
    {
        path: "/pc",
        element: <Pc />,
    },
    {
        path: "/playstation",
        element: <Playstation />,
    },
    {
        path: "/xbox",
        element: <Xbox />,
    },
    {
        path: "/nintendo",
        element: <Nintendo />,
    },
    {
        path: "/sports",
        element: <Sports />,
    },
    {
        path: "/shooters",
        element: <Shooters />,
    },
    {
        path: "/adventure",
        element: <Adventure />,
    },
    {
        path: "/strategy",
        element: <Strategy />,
    },
    {
        path: "/mmo",
        element: <Mmo />,
    },
])
