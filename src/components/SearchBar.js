export default function SearchBar() {
    return (
        <div className="searchbarContainer">
            <input className="searchbar" type="text" placeholder="Search..." name="search" />
            <input className="submit" type="button" value="Submit" />
        </div>
    )
}