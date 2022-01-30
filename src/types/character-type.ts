import { PaginatorInfoInterface } from "./paginator-types";

interface CharacterType {
    id: number;
    name: string;
    species: string;
    gender: string;
    image: string;
}

interface CharactersOnPageInterface {
    info: PaginatorInfoInterface;
    results: CharacterType[];
}

export type {
    CharacterType,
    CharactersOnPageInterface
};