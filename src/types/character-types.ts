type Origin = {
    name: string;
    url: string;
}
type Location = {
    name: string;
    url: string;
}
type Episode = string[];

interface PageInfo {
    count: number;
    pages: number;
    next: string;
    prev: string;
}

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

interface Page {
    info: PageInfo;
    results: Character[];
}

interface CharactersProps{
    className: string;
}

export type {
    Character,
    CharactersProps,
    PageInfo,
    Page
};