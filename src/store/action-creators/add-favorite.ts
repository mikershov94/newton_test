import { AddFavoriteAction, FavoritesActionTypes } from "../../types/action-types";

const addFavorite = (idCharacter: number): AddFavoriteAction => {
    return {
        type: FavoritesActionTypes.ADD_TO_FAVORITES,
        payload: idCharacter
    }
}

export default addFavorite;