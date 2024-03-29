import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useCounter } from "./hooks/useCounter"
import { Link } from "react-router-dom"
import { useCarritoContext } from "../context/CartContext"
import { toast } from "react-toastify"

export const ItemDetail = ({ item }) => {
    const { addItem } = useCarritoContext()
    const { count, increment, decrement, reset } = useCounter(1, item.stock, 1)

    const handleAddToCart = () => {
        addItem(item, count)
        toast.success(`Producto agregado al carrito correctamente`, {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
        })
    }
    return (
        <section className="text-gray-600 body-font overflow-hidden bg-white">
            <div className=" px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <Link to={'/'}>
                        <button className="absolute top-10 right-16 text-gray-700 hover:underline">Cerrar</button>
                    </Link>
                    <img alt={`Imagen de ${item.name}`} className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={`${item.img}`} />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">Pazari Store</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{item.name}</h1>
                        <div className="flex mb-4">
                            <span className="flex items-center">
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <span className="text-gray-600 ml-3">4 Reviews</span>
                            </span>
                            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                <div className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </div>
                                <div className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </div>
                                <div className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                </div>
                            </span>
                        </div>
                        <p className="leading-relaxed pb-8">Hecha de acero inoxidable con baño de oro 14k llega tu nuevo accesorio favorito, la calidad y escencia de las prendas Pazari te haran sentir especial cada día, complementando tu escencia propia y haciendote brillar.</p>
                        <div className="flex">
                            <span className="title-font font-medium text-base text-gray-900 pr-4">Precio: {item.price}</span>
                        </div>
                        <span className="title-font font-medium text-base text-gray-900">Disponibles: {item.stock}</span>
                        <div className="container mx-auto mt-8">
                            <div className="flex items-center justify-center space-x-4">
                                <span className=" text-base"> Cantidad: </span>
                                <button className="flex ml-auto text-white bg-indigo-500 border-0 p-2 focus:outline-none hover:bg-indigo-600 rounded-full" onClick={decrement}>
                                    -
                                </button>
                                <span className="text-base font-bold">{count}</span>
                                <button className="flex ml-auto text-white bg-indigo-500 border-0 p-2 focus:outline-none hover:bg-indigo-600 rounded-full" onClick={increment}>
                                    +
                                </button>
                                <button className="flex ml-auto text-sm text-white bg-indigo-500 border-0 p-2 focus:outline-none hover:bg-indigo-600 rounded-md" onClick={reset}>
                                    <FontAwesomeIcon icon={faTrashCan} />
                                </button>
                            </div>
                        </div>
                        <div className="flex pt-10 px-16">
                            <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full" onClick={handleAddToCart}>Agregar al Carrito</button>
                            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )


}