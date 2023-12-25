import { Link } from 'react-router-dom'


const genres = [
    {
        name: "sports",
        color: '#00ade1'
    },
    {
        name: "shooters",
        color: 'white'
    },
    {
        name: "adventure",
        color: '#ffdd1c'
    },
    {
        name: "strategy",
        color: '#b81639'
    },
    {
        name: "mmo",
        color: '#00dc82'
    },

]

export const GenreList = () => {
    return (
        <ul className="ul-menu relative flex flex-col gap-7 p-2">
            {genres.map(genre => (
                <li key={genre.name} style={{ '--clr': genre.color }} className="li-menu ">
                    <Link
                        to={`/${genre.name}`}
                        className="a-menu relative text-4xl text-transparent uppercase leading-none
                    tracking-widest text-stroke"
                        data-text={`${String.fromCharCode(160)}${genre.name}${String.fromCharCode(160)}`}>
                        &nbsp;{genre.name}&nbsp;
                    </Link>
                </li>
            ))
            }






        </ul >
    )
}
