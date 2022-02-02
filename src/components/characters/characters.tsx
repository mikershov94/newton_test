import React, { useEffect } from "react";
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

const Characters = (props: CharactersProps): JSX.Element => {
    const state: CharacterState = useSelector((state: GlobalState) => state.characters);
    const numPage = 2;

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
              .catch(() => {
                    //если промис разрешается с ошибкой
                    //то диспатчим событие с неудачей
                    console.log(state)
                    dispatch(failureCharacters());  
              })
    }, []);


    if (state.loading) {
        return <Spinner />
    }

    if (state.error) {
        return <ErrorMessage />
    }

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