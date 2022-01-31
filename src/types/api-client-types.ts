import { type } from "os";
import { ICharacter } from "./character-types";
import { IPage } from "./paginator-types";

interface IApiClient {
    getCharacter(characterId: number): Promise<ICharacter>;
    getAllCharacters(numPage: number): Promise<IPage>;
}

type TAddCharacters = (characters: ICharacter[]) => void;
type TAddFavorite = (character: ICharacter) => void;

interface IAppContext {
    characters: ICharacter[],
    favorites: ICharacter[]
    addCharacters: TAddCharacters,
    addFavorite: TAddFavorite
};

export type {
    IApiClient,
    IAppContext,
    TAddCharacters,
    TAddFavorite
}