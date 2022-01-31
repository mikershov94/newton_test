import React from 'react';
import ApiClient from '../api-client';
import { ApiClientInterface } from '../types/api-client-types';

const RaMAPI: ApiClientInterface = new ApiClient();     //Rick and Morty API
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