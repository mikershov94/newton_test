import React from 'react';
import ApiClient from '../api-client';
import { IApiClient } from '../types/api-client-types';

const RaMAPI: IApiClient = new ApiClient();     //Rick and Morty API
const favorites: number[] = []
const RaMContext = React.createContext({ RaMAPI,
                                         favorites,
                                         addToFavorite: (id: number) => {
                                             //ничего не делаем
                                         }});

export {
    RaMAPI,
    RaMContext
};