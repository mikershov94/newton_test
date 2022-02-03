import { DeleteFavoriteAction, FavoritesActionTypes } from "../../types/action-types";

const deleteFavorite = (idCharacter: number): DeleteFavoriteAction => {
    return {
        type: FavoritesActionTypes.DELETE_FROM_FAVORITES,
        payload: idCharacter
    }
}

export default deleteFavorite;