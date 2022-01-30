import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { RaMAPI, RaMContext } from '../../contexts';
import Characters from '../characters';
import Favorite from '../favorite';
import Header from '../header';
import './app.css';

const App = () => {
    const [favorites, setFavorite] = useState<number[]>([]);

    const addToFavorite = (characterId: number): void => {
        setFavorite([...favorites, characterId]);
    };

    return(
        <RaMContext.Provider value={{ RaMAPI, favorites, addToFavorite }}>
            <Header />
            <Routes>
                <Route path="/" element={<Characters />} />
                <Route path="/favorite" element={<Favorite />} />
            </Routes>
        </RaMContext.Provider>
    );
}

export default App;