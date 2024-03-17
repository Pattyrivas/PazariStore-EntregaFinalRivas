import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "",
    authDomain: "pazaristore-e577b.firebaseapp.com",
    projectId: "pazaristore-e577b",
    storageBucket: "pazaristore-e577b.appspot.com",
    messagingSenderId: "647732253001",
    appId: "1:647732253001:web:93659b9d7285275bdf0a98"
};

const app = initializeApp(firebaseConfig);

const bdd = getFirestore()

const prods = [
    {
        "name": "Collar Estella",
        "price": 10.990,
        "stock": 5,
        "img": "https://firebasestorage.googleapis.com/v0/b/pazaristore-e577b.appspot.com/o/1.jpg?alt=media&token=493b0fd8-2c64-42c9-a008-5c2972134e28",
        "category": "collar"
    },
    {
        "name": "Set Tiffany",
        "price": 13.990,
        "stock": 8,
        "img": "https://firebasestorage.googleapis.com/v0/b/pazaristore-e577b.appspot.com/o/2.jpg?alt=media&token=07cde645-a912-43d1-872b-c4fde35968ac",
        "category": "set"
    },
    {
        "name": "Aros trinidad",
        "price": 4.990,
        "stock": 4,
        "img": "https://firebasestorage.googleapis.com/v0/b/pazaristore-e577b.appspot.com/o/3.jpg?alt=media&token=3ede4cdb-40a5-4c16-8a26-4c4dd1e62727",
        "category": "aros"
    },
    {
        "name": "Aros corazón",
        "price": 3.990,
        "stock": 3,
        "img": "https://firebasestorage.googleapis.com/v0/b/pazaristore-e577b.appspot.com/o/4.jpg?alt=media&token=044b61e7-9917-4582-a216-3d0cd9f120a2",
        "category": "aros"
    },
    {
        "name": "Collar Mariposas",
        "price": 8.990,
        "stock": 6,
        "img": "https://firebasestorage.googleapis.com/v0/b/pazaristore-e577b.appspot.com/o/5.jpg?alt=media&token=66f2b7bd-a6f9-4140-a886-bf557959c913",
        "category": "collar"
    },
    {
        "name": "Set Estrella",
        "price": 12.990,
        "stock": 7,
        "img": "https://firebasestorage.googleapis.com/v0/b/pazaristore-e577b.appspot.com/o/6.jpg?alt=media&token=edd4a903-ce98-4578-86e8-be5f5fb9b823",
        "category": "set"
    },
    {
        "name": "Collar Perlas",
        "price": 12.990,
        "stock": 7,
        "img": "https://firebasestorage.googleapis.com/v0/b/pazaristore-e577b.appspot.com/o/7.jpg?alt=media&token=0b16d15e-7d5d-4415-8839-0c0692b6a30a",
        "category": "collar"
    },
    {
        "name": "Collar Cupido",
        "price": 10.990,
        "stock": 5,
        "img": "https://firebasestorage.googleapis.com/v0/b/pazaristore-e577b.appspot.com/o/8.jpg?alt=media&token=7716302e-22cb-49c1-b44e-fa5073dcab36",
        "category": "collar"
    },
    {
        "name": "Set Aros Corazonada",
        "price": 6.990,
        "stock": 5,
        "img": "https://firebasestorage.googleapis.com/v0/b/pazaristore-e577b.appspot.com/o/9.jpg?alt=media&token=4f8b9f8c-1e63-4f53-99af-5077d09fb7bd",
        "category": "set"
    },
    {
        "name": "Collar Candado",
        "price": 10.990,
        "stock": 5,
        "img": "https://firebasestorage.googleapis.com/v0/b/pazaristore-e577b.appspot.com/o/10.jpg?alt=media&token=f34296bf-d262-431c-ba49-f36e7d1a6558",
        "category": "collar"
    }
]

export const createProducts = async () => {
    prods.forEach(async (prod) => {
        await addDoc(collection(bdd, "productos"), {
            name: prod.name,
            price: prod.price,
            stock: prod.stock,
            img: prod.img,
            category: prod.category
        })
    })
}

export const getProducts = async () => {
    const productos = await getDocs(collection(bdd, "productos"))
    const items = productos.docs.map(prod => { return { ...prod.data(), id: prod.id } })
    return items
}

export const getProduct = async (id) => {
    const producto = await getDoc(doc(bdd, "productos", id))
    const item = { ...producto.data(), id: producto.id }
    return item
}

export const updateProduct = async (id, info) => {
    await updateDoc(doc(bdd, "productos", id), info)
}

export const deleteProduct = async (id) => {
    await deleteDoc(doc(bdd, "productos", id))
}

//Ordenes de Compra

export const createOrdenCompra = async (cliente, precioTotal, carrito, fecha) => {
    const ordenCompra = await addDoc(collection(bdd, "ordenesCompra"), {
        cliente: cliente,
        items: carrito,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(bdd, "ordenesCompra", id))
    const item = { ...ordenCompra.data(), id: ordenCompra.id }
    return item
}