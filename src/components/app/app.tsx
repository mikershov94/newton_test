import React from 'react';
import Row from '../row';
import {RaMAPI, APIContext} from '../../contexts';

const App = () => {
    return(
        <div>
            <APIContext.Provider value={RaMAPI}>
                <Row />
                <Row />
                <Row />
            </APIContext.Provider>
        </div>
    );
}

export default App;