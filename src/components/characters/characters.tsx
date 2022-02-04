import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Character, CharactersProps } from "../../types/character-types";
import { CharacterState, GlobalState } from "../../types/state-types";
import Card from "../card";
import requestCharacters from "../../store/action-creators/request-characters";
import Spinner from "../spinner";
import ErrorMessage from "../error-message";
import { RaMAPI } from "../../store";
import { Page } from "../../types/api-client-types";
import recieveCharacters from "../../store/action-creators/recieve-characters";
import failureCharacters from "../../store/action-creators/failure-characters";
import Paginator from "../paginator";
import './character.css';

const Characters = (props: CharactersProps): JSX.Element => {
    const pageNums: number[] = [1,2,3,4,5,6,7,8,9,10];
    const state: CharacterState = useSelector((state: GlobalState) => state.characters);
    const [numPage, setNumPage] = useState(1);

    const handlePageClick = (numPage: number): void => {
        setNumPage(numPage);
    }

    const dispatch = useDispatch();

    useEffect(() => {
        //диспатчим редьюсеру событие начала запроса данных
        dispatch(requestCharacters());

        //запрашиваем у API данные с помощью API-клиента
        RaMAPI.getCharactersPage(numPage)
              .then((page: Page) => {
                    //если промис разрешается и приходит страница с персонажами
                    //то ждем 2000мс и диспатчим событие о завершении загрузки
                    //в ActionCreator передаем полученную страницу
                    setTimeout(() => {
                        dispatch(recieveCharacters(page));
                    }, 2000);
              })
              .catch((e: Error) => {
                    //если промис разрешается с ошибкой
                    //то диспатчим событие с неудачей
                    console.log(e.message)
                    dispatch(failureCharacters());  
              })
    }, [numPage]);

    let element: JSX.Element = 
            <div className={props.className} >
                {state.characters.map((character: Character) => {
                    return <Card character={character} key={character.id} />
                })}
            </div>;

    if (state.loading) {
        element =  <div className="icons-container icons-container_height">
                        <Spinner />
                    </div>
    }

    if (state.error) {
        element =  <div className="icons-container icons-container_height">
                        <ErrorMessage />
                    </div>
    }

    return(
        <div className="characters">
            {element}
            <Paginator pageNums={pageNums} 
                       page={numPage}
                       handlePageClick={handlePageClick} />
        </div>
    );
};

export default Characters;