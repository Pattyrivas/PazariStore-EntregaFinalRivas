import { Link } from "react-router-dom"

export const Item = ({ product }) => {
    return (
        <div className="text-black body-font ">
            <div className="container px-5 py-24 mx-auto ">
                <div className="flex flex-wrap -m-4 ">
                    <div>
                        <div className="block relative h-48 rounded overflow-hidden ">
                            <img alt={`Imagen de ${product.name}`} className="object-cover object-center w-full h-full block" src={`${product.img}`} />
                        </div>
                        <div className="mt-4">
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.category}</h3>
                            <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
                            <p className="mt-1 text-sm">Precio: {product.price}</p>
                            <p className="mt-1 pb-5 text-sm">Stock: {product.stock}</p>
                            <Link to={`/product/${product.id}`}>
                                <button className="text-sm flex ml-auto text-white bg-indigo-500 border- py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded-full">Ver Detalles</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}