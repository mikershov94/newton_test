import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Character, CharactersProps } from "../../types/character-types";
import { CharacterState, GlobalState } from "../../types/state-types";
import Card from "../card";
import requestCharacters from "../../store/action-creators/request-characters";

const Characters = (props: CharactersProps): JSX.Element => {
    const state: CharacterState = useSelector((state: GlobalState) => state.characters);
    const numPage = 2;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestCharacters(numPage))
    }, []);


    return(
        <div>
            <div className={props.className} >
                {state.characters.map((character: Character) => {
                    return <Card character={character} key={character.id} />
                })}
            </div>
        </div>
    );
};

export default Characters;