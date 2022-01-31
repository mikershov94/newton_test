import { ApiClientInterface } from "./api-client-types";

interface ContextPropsInterface {
    RaMAPI: ApiClientInterface;
    favorites: number[];
    addToFavorite: (id: number) => void;
}

export type {
    ContextPropsInterface
}