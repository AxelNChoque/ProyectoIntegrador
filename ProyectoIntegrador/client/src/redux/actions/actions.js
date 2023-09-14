import { ADD_TO_FAVORITE, REMOVE_FAVORITE, FILTER, ORDER } from "./actions-types"
import axios from "axios";

// export const addFavorite = character => {
//     return{
//         type:ADD_TO_FAVORITE,
//         payload: character,
//     }
// }
// export const addFavorite = (character) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav';
//     return (dispatch) => {
//        axios.post(endpoint, character).then(({ data }) => {
//           return dispatch({
//              type: ADD_TO_FAVORITE,
//              payload: data,
//           });
//        });
//     };
//  };

export const addFavorite = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return async dispatch => {
      try{
         
         const response = await axios.post(endpoint,character);
         const { data } = response;

         dispatch({
            type: ADD_TO_FAVORITE,
            payload: data,
         });
      }
      catch(err) {
         alert('Error al agregar favorito: ', err);
      } 
   }
}


// export const removeFavorite = id => {
//    //  return{
//    //      type:REMOVE_FAVORITE,
//    //      payload:id,
//    //  }
//     const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//    return (dispatch) => {
//       axios.delete(endpoint).then(({ data }) => {
//          return dispatch({
//             type: REMOVE_FAVORITE,
//             payload: data,
//       });
//       });
//    };
// }

export const removeFavorite = id => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
   return async dispatch => {
      try{
         const response = await axios.delete(endpoint);
      const { data } = response;
      dispatch({
         type: REMOVE_FAVORITE,
         payload:data,
      })
      }
      catch(err) {
         alert('Error al eliminar favorito:', err);
      }
   }
}


export const filterCards = gender => {
    return{
        type:FILTER,
        payload:gender,
    }
}

export const orderCards = order => {
    return{
        type:ORDER,
        payload:order,
    }
}