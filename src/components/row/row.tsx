import React from "react";
import Card from '../card';
import './row.css';

const Row = (props) => {
    const getRandomId = (min, max) => {
        return Math.floor(Math.random() * (max - min));
    }

    return(
        <div className="row">
            <Card id={getRandomId(1, 50)} rmService={props.rmService}/>
            <Card id={getRandomId(20, 40)} rmService={props.rmService}/>
            <Card id={getRandomId(30, 70)} rmService={props.rmService}/>
        </div>
    );
}

export default Row;