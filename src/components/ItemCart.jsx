import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useCarritoContext } from "../context/CartContext"
import { useCounter } from './hooks/useCounter.jsx'

export const ItemCart = ({ product }) => {
    const { removeItem, updateItem } = useCarritoContext()
    const { count, increment, decrement } = useCounter(product.quantity, product.stock, 1)

    return (
        <div className="md:w-3/4 ">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4 ">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="text-left font-semibold">Producto</th>
                            <th className="text-left font-semibold">Precio</th>
                            <th className="text-left font-semibold">Cantidad</th>
                            <th className="text-left font-semibold">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-4">
                                <div className="flex items-center">
                                    <img src={`${product.img}`} alt={`Imagen de ${product.title}`}
                                        className="w-24 h-24 object-cover" />
                                    <span className="font-semibold">{product.title}</span>
                                </div>
                            </td>
                            <td className="py-4">${product.price}</td>
                            <td className="py-4">
                                <div className="flex items-center">
                                    <button className="border rounded-md py-2 px-4 mr-2" onClick={async () => {
                                        if (count === 1) {
                                            return;
                                        } else {
                                            updateItem(product.id, count - 1)
                                            decrement()
                                        }
                                    }}>-</button>
                                    <span className="text-center w-8">{count}</span>
                                    <button className="border rounded-md py-2 px-4 ml-2" onClick={() => {
                                        updateItem(product.id, count + 1)
                                        increment()
                                    }}>+</button>
                                    <button className="border rounded-md py-2 px-4 ml-2" onClick={() => removeItem(product.id)}><FontAwesomeIcon icon={faTrashCan} /></button>
                                </div>
                            </td>
                            <td className="py-4">${product.price * count}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}