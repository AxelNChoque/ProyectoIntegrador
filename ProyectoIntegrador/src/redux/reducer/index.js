import { ADD_TO_FAVORITE, REMOVE_FAVORITE, FILTER, ORDER} from "../actions/actions-types";

let initialState = { favorites: [], allCharacters:[]};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_FAVORITE:
            // return{
            //     ...state,
            //     favorites: [...state.favorites, action.payload],
            //     allCharacters:[...state.favorites, action.payload],
            // }
            return { 
                    ...state, 
                    favorites: action.payload, 
                    allCharacters: action.payload 
                };
        case REMOVE_FAVORITE:
            // return{
            //     ...state,
            //     favorites: state.favorites.filter(
            //         character => character.id !== action.payload
            //     ),
            // }
            return {
                    ...state, 
                    favorites: action.payload,
                    allCharacters: action.payload 
                    };
        case FILTER:
            return{
                ...state,
                favorites: state.allCharacters.filter(character => {
                    if(action.payload === 'All'){
                        return true;
                    }
                    return character.gender === action.payload;
                })
            }

        case ORDER:
            let orden;
            if(action.payload==='Ascendente'){
                orden = state.favorites.sort((a,b)=>{
                    return (
                      a.id > b.id ? 1 : -1  
                    );
                })
            } else {
                orden = state.favorites.sort((a,b)=>{
                    return (
                        b.id > a.id ? 1: -1
                    );
                })
            }
            return{
                ...state,
                favorites: [...orden],
            }

        default:
            return state;
    }
}

export default rootReducer;