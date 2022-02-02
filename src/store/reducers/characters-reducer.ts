import { CharactersAction, CharactersActionTypes } from "../../types/action-types";
import { CharacterState } from "../../types/state-types";

const updateCharacters = (state: CharacterState,
                          action: CharactersAction): CharacterState => {
    switch (action.type) {
        case CharactersActionTypes.CHARACTERS_REQUESTED:
            return {
                characters: state.characters,
                loading: true,
                error: false
            };

        case CharactersActionTypes.CHARACTERS_RECEIVED:
            return {
                characters: action.payload,
                loading: false,
                error: false
            };

        case CharactersActionTypes.CHARACTERS_FAILURE:
            return {
                characters: state.characters,
                loading: false,
                error: true
            };

        default:
            state;
    }
}

export default updateCharacters;