import { Page } from "./api-client-types";

export enum CharactersActionTypes {
    CHARACTERS_REQUESTED = 'CHARACTERS_REQUESTED',
    CHARACTERS_RECEIVED  = 'CHARACTERS_RECEIVED',
    CHARACTERS_FAILURE   = 'CHARACTERS_FAILURE'
}

interface CharacterRequestAction {
    type: CharactersActionTypes.CHARACTERS_REQUESTED;
}

interface CharacterSuccessAction {
    type: CharactersActionTypes.CHARACTERS_RECEIVED;
    payload: Page;
}

interface CharacterFailureAction {
    type: CharactersActionTypes.CHARACTERS_FAILURE;
}

type CharacterActions = CharacterRequestAction |
                        CharacterSuccessAction |
                        CharacterFailureAction;

type RaMActions = CharacterActions;

export type {
    CharacterActions,
    CharacterRequestAction,
    CharacterSuccessAction,
    CharacterFailureAction,
    RaMActions
}