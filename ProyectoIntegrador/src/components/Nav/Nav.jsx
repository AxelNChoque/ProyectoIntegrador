import SearchBar from "../SearchBar/SearchBar.jsx"
import { NavLink } from "react-router-dom"

export default function Nav({onSearch, randomize}) {
    return(
        <div>
            <SearchBar onSearch={onSearch} />
            <div>
                <NavLink
                    to="/home"
                >
	                Home
                </NavLink>
                <NavLink
                    to="/about"
                >
	                About
                </NavLink>
            </div>
            <button onClick={randomize}>Randomizer</button>
        </div>
    )
}