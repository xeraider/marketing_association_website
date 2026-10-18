import "../styles/Navibar.css";

import heroImage from "../assets/companyicon.png"

const Navbar = () => {
    return (
        <>
            <a className="navbar-company">
                <img className="navbar-logo" src={heroImage} alt="company logo" />
                <span className="navbar-text">My Company</span>
            </a>

            <nav className="navbar-nav">
                <a href="">Menu1</a>
                <a href="">Menu2</a>
                <a href="">Menu3</a>
                <a className="navbar-login" href="" >Login</a>
            </nav>
        </>
    )
}
export default Navbar
