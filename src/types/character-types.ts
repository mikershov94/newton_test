type Origin = {
    name: string;
    url: string;
}
type Location = {
    name: string;
    url: string;
}
type Episode = string[];

interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: Origin;
    location: Location;
    image: string;
    episode: Episode;
    url: string;
    created: string;
}

interface CharactersProps{
    className: string;
}

export type {
    Character,
    CharactersProps,
};