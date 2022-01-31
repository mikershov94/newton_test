import { CharactersOnPageInterface, CharacterType } from "./character-types";

interface ApiClientInterface {
    getCharacter(characterId: number): Promise<CharacterType>;
    getAllCharacters(pageNum: number): Promise<CharactersOnPageInterface>;
}

export type {
    ApiClientInterface
}