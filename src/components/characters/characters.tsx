import React from "react";
import Card from "../card";

interface CharactersPropsInterface {
    className: string;
}

const Characters = (props: CharactersPropsInterface) => {
    return(
        <div className={props.className} >
            <Card id={1} />
            <Card id={2} />
            <Card id={3} />
            <Card id={4} />
            <Card id={5} />
            <Card id={6} />
            <Card id={7} />
            <Card id={8} />
        </div>
    );
};

export default Characters;