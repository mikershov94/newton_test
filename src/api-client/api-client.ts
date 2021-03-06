import { ApiClient, Page } from "../types/api-client-types";

class RaMClient implements ApiClient {
    private baseUrl: string;

    constructor() {
        this.baseUrl = 'https://rickandmortyapi.com/api/';
    }

    async getCharactersPage(numPage: number): Promise<Page> {
        const response: Response = await fetch(`${this.baseUrl}character/?page=${numPage}`);
        
        //если ответ не содержит код 200 - вызываем исключение
        if (!response.ok) {
            throw new Error('Не удалось связаться с сервером');
        }

        const body: Promise<Page> = await response.json();
        return body;
    }
}

export default RaMClient;