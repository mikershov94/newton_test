import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AddCharacters, AddFavorite } from '../../types/api-client-types';
import { Character } from '../../types/character-types';
import Characters from '../characters';
import Favorite from '../favorite';
import Header from '../header';
import { RaMContext } from './app-context';
import './app.css';

const App = (): JSX.Element => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [favorites, setFavorites] = useState<Character[]>([]);
    
    const addCharacters: AddCharacters = (data: Character[]): void => {
        setCharacters([]);
        //console.log(characters)
    }

    const addFavorite: AddFavorite = (character: Character): void => {
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