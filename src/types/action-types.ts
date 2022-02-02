import { Page } from "./api-client-types";

interface CharactersRequestAction {
    type: string;
};

interface CharactersSuccessAction {
    type: string;
    payload: Page
};
interface CharactersFailureAction {
    type: string;
};

type CharactersAction = CharactersRequestAction |
                        CharactersSuccessAction |
                        CharactersFailureAction;

type RaMActions = CharactersAction;

export enum CharactersActionTypes {
    CHARACTERS_REQUESTED = 'CHARACTERS_REQUESTED',
    CHARACTERS_RECEIVED  = 'CHARACTERS_RECEIVED',
    CHARACTERS_FAILURE   = 'CHARACTERS_FAILURE'
}

export type {
    CharactersRequestAction,
    CharactersSuccessAction,
    CharactersFailureAction,
    CharactersAction,
    RaMActions
}