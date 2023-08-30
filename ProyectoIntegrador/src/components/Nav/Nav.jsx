import SearchBar from "../SearchBar/SearchBar.jsx"
import { NavLink } from "react-router-dom"

export default function Nav({onSearch, randomize, logoutHandler}) {
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
                <NavLink
                    to='/favorites'>
                    Favorites
                </NavLink>
                <NavLink
                    onClick={logoutHandler}
                    to='/'
                >
                    Logout
                </NavLink>
            </div>
            <button onClick={randomize}>Randomizer</button>
        </div>
    )
}