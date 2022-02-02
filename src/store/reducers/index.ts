import { stat } from "fs/promises";
import { RaMActions } from "../../types/action-types";
import { GlobalState } from "../../types/state-types";
import updateCharacters from "./characters-reducer";

const initialState: GlobalState = {
    characters: {
        characters: [],
        loading: false,
        error: false
    },
    favorites: []
}

const reducer = (state: GlobalState = initialState, action: RaMActions): GlobalState => {
    return {
        characters: updateCharacters(state.characters, action),
        favorites: []
    }
}

export default reducer;