import { Page } from "./api-client-types";
import { Character } from "./character-types";

export enum CharactersActionTypes {
    CHARACTERS_REQUESTED = 'CHARACTERS_REQUESTED',
    CHARACTERS_RECEIVED  = 'CHARACTERS_RECEIVED',
    CHARACTERS_FAILURE   = 'CHARACTERS_FAILURE'
}

export enum FavoritesActionTypes {
    ADD_TO_FAVORITES = 'ADD_TO_FAVORITES',
    DELETE_FROM_FAVORITES = 'DELETE_FROM_FACORITES',
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

interface AddFavoriteAction {
    type: FavoritesActionTypes.ADD_TO_FAVORITES;
    payload: Character;
}

interface DeleteFavoriteAction {
    type: FavoritesActionTypes.DELETE_FROM_FAVORITES;
    payload: Character;
}

type CharacterActions = CharacterRequestAction |
                        CharacterSuccessAction |
                        CharacterFailureAction;

type FavoriteActions = AddFavoriteAction | DeleteFavoriteAction;

type RaMActions = CharacterActions | FavoriteActions;

export type {
    CharacterActions,
    CharacterRequestAction,
    CharacterSuccessAction,
    CharacterFailureAction,
    AddFavoriteAction,
    DeleteFavoriteAction,
    FavoriteActions,
    RaMActions
}