import { DeleteFavoriteAction, FavoritesActionTypes } from "../../types/action-types";
import { Character } from "../../types/character-types";

const deleteFavorite = (character: Character): DeleteFavoriteAction => {
    return {
        type: FavoritesActionTypes.DELETE_FROM_FAVORITES,
        payload: character
    }
}

export default deleteFavorite;