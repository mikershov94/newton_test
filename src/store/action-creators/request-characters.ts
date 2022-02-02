import { Dispatch } from "react";
import { RaMAPI } from "..";
import { CharactersAction, CharactersActionTypes } from "../../types/action-types";

const requestCharacters = (numPage: number) => {
    return async (dispatch: Dispatch<CharactersAction>) => {
        try {
            //диспатчим редьюсеру событие об отправке запроса на сервер
            dispatch({type: CharactersActionTypes.CHARACTERS_REQUESTED});

            //используя API-клиент запрашиваем у сервера страницу с персонажами
            const response = await RaMAPI.getCharactersPage(numPage);
            dispatch({type: CharactersActionTypes.CHARACTERS_RECEIVED, payload: response})
            
        } catch (error) {
            //если при запросе отловили ошибку
            //диспатчим редьюсеру событие о неудаче и передаем сообщение
            dispatch({
                type: CharactersActionTypes.CHARACTERS_FAILURE,
                payload: 'Нам не удалось показать персонажей. Попробуйте позже'
            })
        }
    }
}
