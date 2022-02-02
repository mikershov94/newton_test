import { CharacterRequestAction, CharactersActionTypes } from "../../types/action-types";

const requestCharacters = (): CharacterRequestAction => {
    return {
        type: CharactersActionTypes.CHARACTERS_REQUESTED
    }
}

export default requestCharacters;
