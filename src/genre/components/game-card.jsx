
const GameCard = ({ img, name, plataform, description, type, date }) => {
    return (
        <article className="bg-neutral-300 p-4 rounded-xl m-5 flex flex-col sm:flex-row ">
            <div className="mb-4 sm:mr-4 sm:mb-0">
                <img src={img} alt={name} className="max-w-64" />
            </div>
            <div className="text-left">
                <h3 className="mb-2 lg:text-center lg:text-4xl">{name}</h3>
                <p className="mb-2 flex gap-4">{plataform}</p>
                <p className="mb-2">{type} / {date}</p>
                <p>{description}</p>
            </div>
        </article>
    )
}

export default GameCard
