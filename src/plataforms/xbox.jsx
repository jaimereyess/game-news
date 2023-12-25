import { NavBar, Footer } from "../components"
import { xboxController, otherXboxProducts } from "./data/xbox-data"


export const Xbox = () => {
    return (
        <main>
            <div className="h-full p-2 bg-slate-900">
                <NavBar />
                <section className="container mx-auto p-4">
                    <h2 className="text-3xl font-bold mb-4 text-green-200">Xbox Accessories</h2>

                    {/* Xbox Controller */}
                    <h2 className="text-2xl font-semibold mb-2 text-green-200">{xboxController.name}</h2>
                    <div className="bg-gray-200 p-4 rounded-lg">
                        <p>{xboxController.description}</p>
                        <p><strong>Color:</strong> {xboxController.color}</p>
                        <p><strong>Price:</strong> {xboxController.price}</p>
                    </div>

                    {/* Other Xbox Products */}
                    <h2 className="text-2xl font-semibold mt-8 mb-2 text-green-200">Other Xbox Products</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {otherXboxProducts.map((product, index) => (
                            <div key={index} className="bg-gray-200 p-4 rounded-lg">
                                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                                <p>{product.description}</p>
                                <p><strong>Price:</strong> {product.price}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
        </main >
    )
}

