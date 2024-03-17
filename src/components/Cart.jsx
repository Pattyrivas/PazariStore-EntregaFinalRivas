import { Link } from "react-router-dom"
import { useCarritoContext } from "../context/CartContext"
import { ItemList } from "./ItemList"

export const Cart = () => {
    const { carrito, totalPrice, emptyCart } = useCarritoContext()

    return (
        <>
            {
                carrito.length === 0 ?
                    <>
                        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                            <div className="text-center lg:w-2/3 w-full">
                                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Ups, aún no agregas nada al carrito :(</h1>
                                <div className="flex justify-center pt-14">
                                    <button className="flex  text-white bg-indigo-500 border-0 p-2 focus:outline-none hover:bg-indigo-600 rounded-full" >
                                        <Link to={'/'}>
                                            Volver al inicio
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <div className="container mx-auto py-8">
                        <h1 className="text-2xl font-semibold mb-4">Carrito de compras:</h1>
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="md:w-3/4">
                                {<ItemList products={carrito} plantilla="ItemCart" />}
                            </div>
                            <div className="md:w-1/4">
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <h2 className="text-lg font-semibold mb-4">Resumen:</h2>
                                    <div className="flex justify-between mb-2">
                                        <span>Subtotal</span>
                                        <span>${totalPrice()}</span>
                                    </div>
                                    <div className="flex justify-between mb-2">
                                        <span>Envio</span>
                                        <span>$0.00</span>
                                    </div>
                                    <hr className="my-2" />
                                    <div className="flex justify-between mb-2">
                                        <span className="font-semibold">Total</span>
                                        <span className="font-semibold">${totalPrice()}</span>
                                    </div>
                                    <button className="bg-indigo-500 text-white py-2 px-4 rounded-full mt-4 w-full" onClick={emptyCart}>
                                        Vaciar Carrito</button>
                                    <button className="bg-indigo-500 text-white py-2 px-4 rounded-full mt-4 w-full">
                                        <Link to={'/'}>
                                            Continuar Comprando
                                        </Link>
                                    </button>
                                    <button className="bg-indigo-500 text-white py-2 px-4 rounded-full mt-4 w-full">
                                        <Link to={'/checkout'}>
                                            Finalizar compra
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}