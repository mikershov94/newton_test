import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import {RaMAPI, APIContext} from '../../contexts';
import Characters from '../characters';
import Favorite from '../favorite';
import Header from '../header';
import './app.css';

const App = () => {
    const [favorites, setFavorite] = useState([]);

    return(
        <APIContext.Provider value={RaMAPI}>
            <Header />
            <Routes>
                <Route path="/" element={<Characters />} />
                <Route path="/favorite" element={<Favorite />} />
            </Routes>
        </APIContext.Provider>
    );
}

export default App;