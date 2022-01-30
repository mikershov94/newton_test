import Characters from '../components/characters';
import { CharactersOnPageInterface, CharacterType } from '../types/character-type';
import { IPaginationInfo } from '../types/paginator-types';



interface ApiClientInterface {
    getCharacter(characterId: number): Promise<CharacterType>;
    getAllCharacters(pageNum: number): Promise<CharactersOnPageInterface>;
}

class ApiClient implements ApiClientInterface {
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
    private validateCharacter(data: any): CharacterType {
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
    private validateCharactersOnPage(data: any): CharactersOnPageInterface {
        return {
            info: data.info,
            results: data.results
        }
    }

    async getCharacter(characterId: number): Promise<CharacterType> {
        //снаружи приходит неопределнный тип данных, поэтому any
        const resource: Promise<any> = await this.getResource(`character/${characterId}/`);
        
        //после успешного разрешения промиса возвращаются типизированные данные
        const character: Promise<CharacterType> = new Promise((resolve, reject) => {
            resolve(this.validateCharacter(resource));
        })

        return character;
    }

    async getAllCharacters(pageNum: number): Promise<CharactersOnPageInterface> {
        //снаружи приходит неопределнный тип данных, поэтому any
        const resource: Promise<any> = await this.getResource(`character/?page=${pageNum}`);

        //после успешного разрешения промиса возвращаются типизированные данные
        const charactersOnPage: Promise<CharactersOnPageInterface> = new Promise((resolve, reject) => {
            resolve(this.validateCharactersOnPage(resource));
        })

        return charactersOnPage;
    }
}

export default ApiClient;