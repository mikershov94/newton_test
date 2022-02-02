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
    getCharactersPage(numPage: number): Promise<Page>;
}

export type {
    ApiClient,
    Page,
    PageInfo
}