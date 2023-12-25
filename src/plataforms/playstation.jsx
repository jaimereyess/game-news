import { NavBar, Footer } from "../components"
import { psControllers, psVR2 } from "./data/playstation-data"

export const Playstation = () => {
    return (
        <main>
            <div className="h-full p-2 bg-slate-900">
                <NavBar />
                <div className="container mx-auto p-4">
                    <h1 className="text-3xl font-bold mb-4 text-blue-200">PlayStation Accessories</h1>

                    {/* PlayStation Controllers */}
                    <h2 className="text-2xl font-semibold mb-2 text-blue-200">PlayStation Controllers</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {psControllers.map((controller, index) => (
                            <div key={index} className="bg-gray-200 p-4 rounded-lg">
                                <h3 className="text-xl font-semibold mb-2">{controller.name}</h3>
                                <p>{controller.description}</p>
                                <p><strong>Color:</strong> {controller.color}</p>
                                <p><strong>Price:</strong> {controller.price}</p>
                            </div>
                        ))}
                    </div>

                    {/* PlayStation VR2 */}
                    <h2 className="text-2xl font-semibold mt-8 mb-2 text-blue-200">PlayStation VR2</h2>
                    <div className="bg-gray-200 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">{psVR2.name}</h3>
                        <p>{psVR2.description}</p>
                        <p><strong>Compatibility:</strong> {psVR2.compatibility}</p>
                        <p><strong>Price:</strong> {psVR2.price}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </main >
    )
}

