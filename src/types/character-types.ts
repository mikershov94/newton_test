interface Character {
    id: number;
    name: string;
    species: string;
    gender: string;
    image: string;
}

interface CharactersProps{
    className: string;
}

export type {
    Character,
    CharactersProps
};