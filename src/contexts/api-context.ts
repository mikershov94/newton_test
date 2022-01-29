import React from 'react';
import ApiClient from '../api-client';

const RaMAPI = new ApiClient();     //Rick and Morty API
const APIContext = React.createContext(RaMAPI);

export {
    RaMAPI,
    APIContext
};