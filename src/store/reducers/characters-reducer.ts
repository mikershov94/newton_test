import { CharacterState } from "../../types/state-types";
import { CHARACTERS_FAILURE,
         CHARACTERS_RECEIVED,
         CHARACTERS_REQUESTED } from "../actions";

const updateCharacters(state: CharacterState, action) {
    switch (action.type) {
        case CHARACTERS_REQUESTED:
            return {};

        case CHARACTERS_RECEIVED:
            return {};

        case CHARACTERS_FAILURE:
            return {};

        default:
            state;
    }
}

export default updateCharacters;