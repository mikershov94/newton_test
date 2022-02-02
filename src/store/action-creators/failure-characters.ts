import { CharacterFailureAction, CharactersActionTypes } from "../../types/action-types";

const failureCharacters = (): CharacterFailureAction => {
    return {
        type: CharactersActionTypes.CHARACTERS_FAILURE
    }
}

export default failureCharacters;