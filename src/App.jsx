import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import './styles/App.css'

function App() {
    return (
        <>
            <Navbar />
            <ItemListContainer mensaje={"Proximamente... "} subMensaje={'Encontraras tu nuevo accesorio favorito aquí'} />
        </>
    )
}

export default App