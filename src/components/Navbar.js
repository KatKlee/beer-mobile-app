import { Link } from "react-router-dom";
import logobeer from './img/Logo.svg'
import './Navbar.css'

const Navbar = () => {
    return (
        <footer>
            <Link to='/' className="backTo"><img src={logobeer} alt="" /></Link>
        </footer>
    )
}

export default Navbar