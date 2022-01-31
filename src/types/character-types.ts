import { IPaginationInfo } from "./paginator-types";

interface ICharacter {
    id: number;
    name: string;
    species: string;
    gender: string;
    image: string;
}

interface ICharactersProps{
    className: string;
}

export type {
    ICharacter,
    ICharactersProps
};