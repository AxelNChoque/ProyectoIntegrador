import { ADD_TO_FAVORITE, REMOVE_FAVORITE, FILTER, ORDER } from "./actions-types"

export const addFavorite = character => {
    return{
        type:ADD_TO_FAVORITE,
        payload: character,
    }
}

export const removeFavorite = id => {
    return{
        type:REMOVE_FAVORITE,
        payload:id,
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