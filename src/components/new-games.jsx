

export const NewGames = () => {
    return (
        <>
            <h3 className="text-white text-4xl font-bold">New games</h3>

            {/*Lg screens*/}
            <div className="hidden lg:flex">
                <article className="cover-section pt-2 flex relative w-[600px] h-[430px]">
                    <img src="cover/mw3.jpg" alt="call-of-duty" className="w-36 flex-grow object-cover opacity-60 transition-all duration-700 ease-out" />
                    <img src="cover/fc24.jpg" alt="fc" className="w-36 flex-grow object-cover opacity-60 transition-all duration-700 ease-out" />
                    <img src="cover/finals.jpg" alt="the-finals" className="w-36 flex-grow object-cover opacity-60 transition-all duration-700 ease-out" />
                    <img src="cover/avatar.jpg" alt="avatar" className="w-36 flex-grow object-cover opacity-60 transition-all duration-700 ease-out" />
                    <img src="cover/f1.jpg" alt="f1" className="w-36 flex-grow object-cover opacity-60 transition-all duration-700 ease-out" />
                </article>
            </div>

            {/* small screens*/}
            <div className="flex flex-col gap-6 mt-6 lg:hidden">
                <img src="cover/mw3.jpg" alt="call-of-duty" />
                <img src="cover/fc24.jpg" alt="fc" />
                <img src="cover/finals.jpg" alt="the-finals" />
                <img src="cover/avatar.jpg" alt="avatar" />
                <img src="cover/f1.jpg" alt="f1" />
            </div>
        </>
    )
}
