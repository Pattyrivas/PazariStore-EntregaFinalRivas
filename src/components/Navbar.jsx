import Cartwidget from './Cartwidget'
import Logo from "../assets/logoPazari.jpg"
import { Link } from "react-router-dom"

export const Navbar = () => {
    const btnLink = 'text-black no-underline hover:underline cursor-pointer mr-4'
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img className=" imagen-logo h-20 w-auto" src={Logo} alt="Logo Pazari Store" />
                    <span className="ml-3 text-xl">Pazari Store</span>
                </Link>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                    <Link to={'/'} className={btnLink}>Inicio</Link>
                    <Link to={'/category/set'} className={btnLink}>Sets</Link>
                    <Link to={'/category/collar'} className={btnLink}>Collares</Link>
                    <Link to={'/category/aros'} className={btnLink}>Aros</Link>
                </nav>
                <Cartwidget />
            </div>
        </header>
    )
}
