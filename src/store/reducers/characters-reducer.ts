import { CharacterActions, CharactersActionTypes  } from "../../types/action-types";
import { CharacterState } from "../../types/state-types";

const updateCharacters = (state: CharacterState,
                          action: CharacterActions): CharacterState => {
    switch (action.type) {
        case CharactersActionTypes.CHARACTERS_REQUESTED:
            return {
                characters: state.characters,
                loading: true,
                error: false
            };

        case CharactersActionTypes.CHARACTERS_RECEIVED:
            return {
                characters: action.payload.results,
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
            return state;
    }
}

export default updateCharacters;