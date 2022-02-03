import { FavoriteActions, FavoritesActionTypes } from "../../types/action-types"
import { CharacterState, FavoriteState } from "../../types/state-types";

const updateFavorites = 
        (state: FavoriteState = [], action: FavoriteActions): FavoriteState => {

    switch(action.type) {
        case FavoritesActionTypes.ADD_TO_FAVORITES:
            return [...state, action.payload];

        case FavoritesActionTypes.DELETE_FROM_FAVORITES:
            return state.filter((characterId: number) => characterId !== action.payload);

        default:
            return state;
    }
}

export default updateFavorites;