interface CharacterType {
    id: number;
    name: string;
    species: string;
    gender: string;
    image: string;
}

interface CheckDataType {
    id: string;
    name: string;
    species: string;
    gender: string;
    image: string;
}

interface ApiClientInterface {
    getCharacter(characterId: number): CharacterType;
}

class ApiClient implements ApiClientInterface {
    private baseUrl: string;

    constructor() {
        this.baseUrl = 'https://rickandmortyapi.com/api/';
    }

    private async getResource(): Promise<any> {
        try {
            const response = await fetch(`${this.baseUrl}${'character/2'}`);
            const bodyResponse: any = await response.json();
            return bodyResponse;
        } catch (err) {
            console.log(err);
        }
    }

    private validateCharacter(data: any): CharacterType {
        return {
            id: data.id,
            name: data.name,
            species: data.species,
            gender: data.gender,
            image: data.image
        };

    }

    getCharacter(characterId: number): CharacterType {
        const data: any = this.getResource();
        const character: CharacterType = this.validateCharacter(data)

        return character;
    }
}

export default ApiClient;