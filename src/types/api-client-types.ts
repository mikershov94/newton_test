import { Character } from "./character-types";

interface PageInfo {
    count: number;
    pages: number;
    next: string;
    prev: string;
}

interface Page {
    info: PageInfo;
    results: Character[];
}

interface ApiClient {
    getCharacter(characterId: number): Promise<Character>;
    getAllCharacters(numPage: number): Promise<Page>;
}

type AddCharacters = (characters: Character[]) => void;
type AddFavorite = (character: Character) => void;

interface AppContext {
    characters: Character[],
    favorites: Character[]
    addCharacters: AddCharacters,
    addFavorite: AddFavorite
};

export type {
    ApiClient,
    AppContext,
    AddCharacters,
    AddFavorite,
    Page,
    PageInfo
}