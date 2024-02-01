import CartWidget from "./Cartwidget"
import Logo from "../assets/logoPazari.jpg"
const Navbar = () => {
    const btnLink = 'text-black no-underline hover:underline cursor-pointer mr-4'
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img className=" imagen-logo h-20 w-auto" src={Logo} alt="Logo Pazari Store" />
                    <span className="ml-3 text-xl">Pazari Store</span>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                    <a className={btnLink}>Inicio</a>
                    <a className={btnLink}>Sobre Nosotros</a>
                    <a className={btnLink}>Collares</a>
                    <a className={btnLink}>Zarcillos</a>
                </nav>
                <CartWidget />
            </div>
        </header>
    )
}

export default Navbar