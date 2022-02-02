import { GlobalState } from "../../types/state-types";
import updateCharacters from "./characters-reducer"

const reducer(state: GlobalState, action): GlobalState {
    return {
        characters: updateCharacters,
        favorites: []
    }
}

export default reducer;