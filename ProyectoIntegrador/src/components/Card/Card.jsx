import { NavLink, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from '../../redux/actions/actions.js'
import { useState, useEffect} from "react";


function Card(props) {
   const {character, onClose, favorites, addFavorite, removeFavorite} = props;
   let [isFav, setIsFav] = useState(false);

   let location = useLocation();

   useEffect(() => {
      favorites.forEach((fav) => {
         if (fav.id === character.id) {
            setIsFav(true);
         }
      });
   }, [favorites]);

   const handleFavorite = character => {
      if(!isFav){
         addFavorite(character);
         setIsFav(true);
      } else {
         removeFavorite(character.id);
         setIsFav(false);
      }
   }

   return (
      <div>
         {location.pathname !== '/favorites' ? 
         <button onClick={
            ()=>{onClose(character.id)}
            }>X</button> : null}
         <NavLink to={`/detail/${character.id}`}>
         <h2>Name: {character.name}</h2>
         </NavLink>
         {
            isFav ? (
            <button onClick={()=>handleFavorite(character)}>❤️</button>
             ) : (
            <button onClick={()=>handleFavorite(character)}>🤍</button>
            )
         }
         <h2>Status: {character.status}</h2>
         <h2>Specie: {character.species}</h2>
         <h2>Gender: {character.gender}</h2>
         <img src={character.image} alt={name} /> 
      </div>
   );
}

const mapDispatchToProps = dispatch => {
   return {
      addFavorite: character => dispatch(addFavorite(character)),
      removeFavorite: id => dispatch(removeFavorite(id)),
   }
}

const mapStateToProps = state => {
   return {
      favorites: state.favorites,
   }
}

export default connect( mapStateToProps, mapDispatchToProps)(Card);