import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useCarritoContext } from "../context/CartContext"
import { Link } from 'react-router-dom'

export const CartWidget = () => {
    const { getItemQuantity } = useCarritoContext()
    return (
        <div className='contenedor-cart'>
            <Link to={'/cart'}>
                <button className='button-cart inline-flex items-center px-10'>
                    <FontAwesomeIcon icon={faCartShopping} style={{ color: "#03001C", fontSize: "20px" }} />
                    <span className='px-4'>{getItemQuantity()}</span>
                </button>
            </Link>
        </div>
    )
}

