import { IPaginationInfo } from "./paginator-types";

interface CharacterType {
    id: number;
    name: string;
    species: string;
    gender: string;
    image: string;
}

interface CharactersOnPageInterface {
    info: IPaginationInfo;
    results: CharacterType[];
}

export type {
    CharacterType,
    CharactersOnPageInterface
};