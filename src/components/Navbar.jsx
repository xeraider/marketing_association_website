import { useState} from "react";
import "../styles/Navibar.css";

import BurgerMenu from "../assets/burgermenu.svg";
import heroImage from "../assets/companyicon.png"

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {setMenuOpen(false);}

    return (
        <div className="navbar-container">
            <a className="navbar-company">
                <img className="navbar-logo" src={heroImage} alt="company logo" />
                <span className="navbar-text">My Company</span>
            </a>

            <button className="navbar-burger-button" onClick={() => setMenuOpen(!menuOpen)}>
                <img className="navbar-burger-icon" src={BurgerMenu} alt="burger menu icon" />
            </button>

            <nav className={`navbar-nav ${menuOpen ? "is-open" : ""}`}>
                <a href="" onClick={closeMenu}>Menu1</a>
                <a href="" onClick={closeMenu}>Menu2</a>
                <a href="" onClick={closeMenu}>Menu3</a>
                <a className="navbar-login" href="" onClick={closeMenu}>Login</a>
            </nav>
        </div>
    )
}
export default Navbar
