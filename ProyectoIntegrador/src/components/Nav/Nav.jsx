import SearchBar from "../SearchBar/SearchBar.jsx"
import { NavLink, useLocation } from "react-router-dom"
import style from './nav.module.css';
import rym from '../../assets/rym.png'

export default function Nav({onSearch, randomize, logoutHandler}) {
    const location = useLocation();
    return(
        <div className={style.nav}>
            <div className={style.navContainer}>
                <img src={rym} alt={rym} className={style.image}/>
                <NavLink    className={style.navBar}
                    to="/home"
                >
	                Home
                </NavLink>
                <NavLink    className={style.navBar}
                    to='/favorites'>
                    Favorites
                </NavLink>
                <NavLink    className={style.navBar}
                    to="/about"
                >
	                About
                </NavLink>
                <NavLink    className={style.navBar}
                    onClick={logoutHandler}
                    to='/'
                >
                    Logout
                </NavLink>
            </div>
            {location.pathname == '/home'? <div className={style.containerSearcher}>
            <SearchBar onSearch={onSearch} />
            <button 
            className={style.randomizerBtn}
            onClick={randomize}>Randomizer</button>
            </div> : null}
        </div>
    )
}