import { ApiClient, Page } from "../types/api-client-types";
import { Character } from "../types/character-types";

class RaMClient implements ApiClient {
    private baseUrl: string;

    constructor() {
        this.baseUrl = 'https://rickandmortyapi.com/api/';
    }

    private async getResource(uri: string): Promise<any> {
        const response = await fetch(`${this.baseUrl}${uri}`);
        const bodyResponse: any = await response.json();
        return bodyResponse;
    }

    //метод получает данные с неопределенным типом
    //и возвращает проверенные данные с заданным типом
    private validateCharacter(data: any): Character {
        return {
            id: data.id,
            name: data.name,
            species: data.species,
            gender: data.gender,
            image: data.image
        }
    }

    //метод получает данные с неопределенным типом
    //и возвращает проверенные данные с заданным типом
    private validateCharactersOnPage(data: any): Page {
        return {
            info: data.info,
            results: data.results
        }
    }

    async getCharacter(characterId: number): Promise<Character> {
        //снаружи приходит неопределнный тип данных, поэтому any
        const resource: Promise<any> = await this.getResource(`character/${characterId}/`);
        
        //после успешного разрешения промиса возвращаются типизированные данные
        const character: Promise<Character> = new Promise((resolve, reject) => {
            resolve(this.validateCharacter(resource));
        })

        return character;
    }

    async getAllCharacters(pageNum: number): Promise<Page> {
        //снаружи приходит неопределнный тип данных, поэтому any
        const resource: Promise<any> = await this.getResource(`character/?page=${pageNum}`);
        
        //после успешного разрешения промиса возвращаются типизированные данные
        const charactersOnPage: Promise<Page> = new Promise((resolve, reject) => {
            resolve(this.validateCharactersOnPage(resource));
        })

        return charactersOnPage;
    }
}

export default RaMClient;