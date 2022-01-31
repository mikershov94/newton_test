import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ApiClient from '../../api-client';
import { IApiClient, TAddCharacters, TAddFavorite } from '../../types/api-client-types';
import { ICharacter } from '../../types/character-types';
import Characters from '../characters';
import Favorite from '../favorite';
import Header from '../header';
import { RaMContext } from './app-context';
import './app.css';

const App = (): JSX.Element => {
    const [characters, setCharacters] = useState<ICharacter[]>([]);
    const [favorites, setFavorites] = useState<ICharacter[]>([]);
    
    const addCharacters: TAddCharacters = (data: ICharacter[]): void => {
        setCharacters([]);
        //console.log(characters)
    }

    const addFavorite: TAddFavorite = (character: ICharacter): void => {
        setFavorites([...favorites, character])
        console.log(favorites);
    }    

    return(
        <RaMContext.Provider value={{characters,
                                     favorites,
                                     addCharacters, 
                                     addFavorite}}>
            <Header />
            <Routes>
                <Route path="/" element={<Characters className='list' />} />
                <Route path="/favorite" element={<Favorite className='list' />} />
            </Routes>
        </RaMContext.Provider>
    );
}

export default App;