import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Cards from "./components/Cards.jsx";

import "./App.css"
import Resources from "./components/Resources.jsx";


const App = () => {
    return (
        <>
            <header className="app-header">
                <Navbar />
            </header>

            <main className="app-main">
                <Hero />
                <Cards />
            </main>

            <footer className="app-footer">
                <Resources />
            </footer>
        </>
    )
}
export default App
