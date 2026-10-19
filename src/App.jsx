{/* Components */}
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Cards from "./components/Cards.jsx";
import Resources from "./components/Resources.jsx";

{/* Styles */}
import "./App.css"

{/* Main body of Website*/}
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
