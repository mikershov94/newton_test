import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {RaMAPI, APIContext} from '../../contexts';
import Characters from '../characters';
import Favorite from '../favorite';

const App = () => {
    return(
        <div>
            <APIContext.Provider value={RaMAPI}>
                <Routes>
                    <Route path="/" element={<Characters />} />
                    <Route path="/favorite" element={<Favorite />} />
                </Routes>
            </APIContext.Provider>
        </div>
    );
}

export default App;