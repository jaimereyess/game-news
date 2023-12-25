import { NavBar, Footer } from "../components"
import { switchConsole, switchAccessories } from "./data/nintendo-data"

export const Nintendo = () => {
    return (
        <main>
            <div className="h-full p-2 bg-slate-900">
                <NavBar />
                <section className="container mx-auto p-4">
                    <h2 className="text-3xl font-bold mb-4 text-red-200">Nintendo Switch Products</h2>

                    {/* Nintendo Switch Console */}
                    <h2 className="text-2xl font-semibold mb-2 text-red-200">{switchConsole.name}</h2>
                    <div className="bg-gray-200 p-4 rounded-lg">
                        <p>{switchConsole.description}</p>
                        <p><strong>Color:</strong> {switchConsole.color}</p>
                        <p><strong>Price:</strong> {switchConsole.price}</p>
                    </div>

                    {/* Nintendo Switch Accessories */}
                    <h2 className="text-2xl font-semibold mt-8 mb-2 text-red-200">Nintendo Switch Accessories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {switchAccessories.map((accessory, index) => (
                            <div key={index} className="bg-gray-200 p-4 rounded-lg">
                                <h3 className="text-xl font-semibold mb-2">{accessory.name}</h3>
                                <p>{accessory.description}</p>
                                <p><strong>Price:</strong> {accessory.price}</p>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
            <Footer />
        </main >
    )
}

