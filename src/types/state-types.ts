import { Character } from "./character-types";

interface CharacterState {
    characters: Character[];
    loading: boolean;
    error: boolean;
}

type FavoriteState = Character[];

interface GlobalState {
    characters: CharacterState;
    favorites: FavoriteState;
}

export type {
    CharacterState,
    FavoriteState,
    GlobalState
}