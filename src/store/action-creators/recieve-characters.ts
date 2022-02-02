import { CharactersActionTypes, CharacterSuccessAction } from "../../types/action-types";
import { Page } from "../../types/api-client-types";

const recieveCharacters = (data: Page): CharacterSuccessAction => {
    return {
        type: CharactersActionTypes.CHARACTERS_RECEIVED,
        payload: data
    }
}

export default recieveCharacters;