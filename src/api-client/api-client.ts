import CharacterType from '../types/character-type';

export interface ApiClientInterface {
    getCharacter(characterId: number): Promise<CharacterType>;
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

    private validateCharacter(data: any): CharacterType {
        return {
            id: data.id,
            name: data.name,
            species: data.species,
            gender: data.gender,
            image: data.image
        }
    }

    async getCharacter(characterId: number): Promise<CharacterType> {
        const resource: Promise<any> = await this.getResource(`character/${characterId}/`); 
        const character: Promise<CharacterType> = new Promise((resolve, reject) => {
            resolve(this.validateCharacter(resource));
        })

        return character;
    }
}

export default ApiClient;