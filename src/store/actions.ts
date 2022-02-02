import { CharactersFailureAction,
         CharactersRequestAction,
         CharactersSuccessAction } from "../types/action-types";

const CHARACTERS_REQUESTED: CharactersRequestAction = 'CHARACTERS_REQUESTED';
const CHARACTERS_RECEIVED:  CharactersSuccessAction = 'CHARACTERS_RECEIVED';
const CHARACTERS_FAILURE:   CharactersFailureAction = 'CHARACTERS_FAILURE';

export {
    CHARACTERS_REQUESTED,
    CHARACTERS_RECEIVED,
    CHARACTERS_FAILURE
}