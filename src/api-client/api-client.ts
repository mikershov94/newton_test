import Characters from '../components/characters';
import { IApiClient } from '../types/api-client-types';
import { ICharacter } from '../types/character-types';
import { IPage, IPaginationInfo } from '../types/paginator-types';

class ApiClient implements IApiClient {
    private baseUrl: string;
    private externalData: any;

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
    private validateCharacter(data: any): ICharacter {
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
    private validateCharactersOnPage(data: any): IPage {
        return {
            info: data.info,
            results: data.results
        }
    }

    async getCharacter(characterId: number): Promise<ICharacter> {
        //снаружи приходит неопределнный тип данных, поэтому any
        const resource: Promise<any> = await this.getResource(`character/${characterId}/`);
        
        //после успешного разрешения промиса возвращаются типизированные данные
        const character: Promise<ICharacter> = new Promise((resolve, reject) => {
            resolve(this.validateCharacter(resource));
        })

        return character;
    }

    async getAllCharacters(pageNum: number): Promise<IPage> {
        //снаружи приходит неопределнный тип данных, поэтому any
        const resource: Promise<any> = await this.getResource(`character/?page=${pageNum}`);
        
        //после успешного разрешения промиса возвращаются типизированные данные
        const charactersOnPage: Promise<IPage> = new Promise((resolve, reject) => {
            resolve(this.validateCharactersOnPage(resource));
        })

        return charactersOnPage;
    }
}

export default ApiClient;