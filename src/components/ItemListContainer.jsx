import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { ItemList } from "./ItemList"
import { getProducts } from "../firebase/firebase.js"

export const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const { cid } = useParams()

    useEffect(() => {
        getProducts()
            .then(prods => {
                const productos = prods.filter(prod => prod.stock > 0)
                if (cid) {
                    const productosFiltrados = productos.filter(prod => prod.category == cid)
                    setProducts(productosFiltrados)
                } else {
                    setProducts(productos)
                }
            })
            .catch((error) => console.log(error))
    }, [cid])


    return (
        <div>
            <div className="flex flex-col text-center w-full mb-12 pt-10">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black">Accesorios: </h1>
            </div>
            <div className="flex flex-wrap gap-12 justify-center ">
                <ItemList products={products} plantilla="Item" />
            </div>
        </div>

    )
}



