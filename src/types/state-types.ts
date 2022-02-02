import { Character } from "./character-types";

interface characterState {
    characters: Character[];
    loading: boolean;
    error: boolean;
}

type favoriteState = number[];

interface globalState {
    characters: characterState;
    favorites: favoriteState;
}

export type {
    characterState,
    favoriteState,
    globalState
}