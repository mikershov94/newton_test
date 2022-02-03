import { FavoriteActions, FavoritesActionTypes } from "../../types/action-types"
import { FavoriteState } from "../../types/state-types";

const updateFavorites = 
        (state: FavoriteState = [], action: FavoriteActions): FavoriteState => {

    switch(action.type) {
        case FavoritesActionTypes.ADD_TO_FAVORITES:
            console.log(state)
            return [...state, action.payload];

        case FavoritesActionTypes.DELETE_FROM_FAVORITES:
            return state.filter((characterId: number) => characterId !== action.payload);

        default:
            return state;
    }
}

export default updateFavorites;