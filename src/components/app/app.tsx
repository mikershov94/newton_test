import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {RaMAPI, APIContext} from '../../contexts';
import Characters from '../characters';
import Favorite from '../favorite';

const App = () => {
    return(
        <div>
            <APIContext.Provider value={RaMAPI}>
                
            </APIContext.Provider>
        </div>
    );
}

export default App;