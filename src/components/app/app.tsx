import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Characters from '../characters';
import Favorite from '../favorite';
import Header from '../header';
import './app.css';

const App = (): JSX.Element => { 

    return(
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Characters className='list' />} />
                <Route path="/favorite" element={<Favorite className='list' />} />
            </Routes>
        </div>
    );
}

export default App;