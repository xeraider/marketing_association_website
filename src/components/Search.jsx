import "../styles/Search.css"

const Search = () => {
    return (
        <div className="search-bar">
            <input type="search" className="search-input" placeholder="Search..." />
            <button className="search-button">Search</button>
        </div>
    )
}
export default Search