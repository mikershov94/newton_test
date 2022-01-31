import { ICharacter } from "./character-types";
import { IPage } from "./paginator-types";

interface IApiClient {
    getCharacter(characterId: number): Promise<ICharacter>;
    getAllCharacters(pageNum: number): Promise<IPage>;
}

export type {
    IApiClient
}