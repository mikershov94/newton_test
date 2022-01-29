import React from "react";
import Card from '../card';
import './row.css';

const Row = () => {
    
    return(
        <div className="row">
            <Card/>
            <Card/>
            <Card/>
        </div>
    );
}

export default Row;