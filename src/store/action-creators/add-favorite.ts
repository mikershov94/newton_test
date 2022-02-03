import { AddFavoriteAction, FavoritesActionTypes } from "../../types/action-types";
import { Character } from "../../types/character-types";

const addFavorite = (character: Character): AddFavoriteAction => {
    return {
        type: FavoritesActionTypes.ADD_TO_FAVORITES,
        payload: character
    }
}

export default addFavorite;