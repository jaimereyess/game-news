import { NavBar, Footer } from "../components"
import { graphicsCards, processors, mouse, keyboard, headset } from "./data/pc-data"

export const Pc = () => {
    return (
        <main>
            <div className="h-full p-2 bg-slate-900">
                <NavBar />
                <section className="container mx-auto p-4">
                    <h2 className="text-3xl text-white font-bold mb-4">Graphics Cards</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        {graphicsCards.map((card, index) => (
                            <div key={index} className="bg-gray-200 p-4 rounded-lg">
                                <h2 className="text-xl font-semibold mb-2">{card.name}</h2>
                                <p><strong>Manufacturer:</strong> {card.manufacturer}</p>
                                <p><strong>Performance:</strong> {card.performance}</p>
                                <p><strong>Memory:</strong> {card.memory}</p>
                                <p><strong>Price:</strong> {card.price}</p>
                            </div>
                        ))}
                    </div>
                    <h2 className="mt-10 text-3xl font-bold mb-4 text-white">Processor</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        {processors.map((processor, index) => (
                            <div key={index} className="bg-gray-200 p-4 rounded-lg">
                                <h2 className="text-xl font-semibold mb-2">{processor.name}</h2>
                                <p><strong>Manufacturer:</strong> {processor.manufacturer}</p>
                                <p><strong>Cores/Threads:</strong> {processor.cores}</p>
                                <p><strong>Base/Boost Clock Speed:</strong> {processor.clockSpeed}</p>
                                <p><strong>Price:</strong> {processor.price}</p>
                            </div>
                        ))}
                    </div>

                    <h2 className="mt-10 text-3xl font-bold mb-4 text-white">Hardware Overview</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        {/* Mouse */}
                        <div className="bg-gray-200 p-4 rounded-lg">
                            <h2 className="text-xl font-semibold mb-2">{mouse.brand} {mouse.model}</h2>
                            <p><strong>Type:</strong> {mouse.type}</p>
                            <p><strong>Price:</strong> {mouse.price}</p>
                        </div>

                        {/* Keyboard */}
                        <div className="bg-gray-200 p-4 rounded-lg">
                            <h2 className="text-xl font-semibold mb-2">{keyboard.brand} {keyboard.model}</h2>
                            <p><strong>Type:</strong> {keyboard.type}</p>
                            <p><strong>Price:</strong> {keyboard.price}</p>
                        </div>

                        {/* Headset */}
                        <div className="bg-gray-200 p-4 rounded-lg">
                            <h2 className="text-xl font-semibold mb-2">{headset.brand} {headset.model}</h2>
                            <p><strong>Type:</strong> {headset.type}</p>
                            <p><strong>Price:</strong> {headset.price}</p>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </main >
    )
}

