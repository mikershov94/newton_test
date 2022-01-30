import React from "react";
import Card from '../card';
import './row.css';

const Row = () => {
    
    return(
        <div className="row">
            <Card id={1} />
            <Card id={2} />
            <Card id={3} />
        </div>
    );
}

export default Row;