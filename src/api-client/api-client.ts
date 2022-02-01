import { ApiClient, Page } from "../types/api-client-types";
import { Character } from "../types/character-types";

class RaMClient implements ApiClient {
    private baseUrl: string;

    constructor() {
        this.baseUrl = 'https://rickandmortyapi.com/api/';
    }

    async getCharactersPage(numPage: number): Promise<Page> {
        const response: Response = await fetch(`${this.baseUrl}?page=${numPage}`);
        const body: Promise<Page> = await response.json();

        return body;
    }
}

export default RaMClient;