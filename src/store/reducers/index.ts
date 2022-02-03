import { combineReducers } from "redux";
import updateCharacters from "./characters-reducer";
import updateFavorites from "./favorites-reducer";

const reducer = combineReducers({
    characters: updateCharacters,
    favorites: updateFavorites
})

export default reducer;