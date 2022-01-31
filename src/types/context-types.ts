import { IApiClient } from "./api-client-types";

interface IContextProps {
    RaMAPI: IApiClient;
    favorites: number[];
    addToFavorite: (id: number) => void;
}

export type {
    IContextProps
}