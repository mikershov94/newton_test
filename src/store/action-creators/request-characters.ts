import { Dispatch } from "react";
import { RaMAPI } from "..";
import { CharactersActionTypes, RaMActions } from "../../types/action-types";

const requestCharacters = (numPage: number) => {
    return async (dispatch: Dispatch<RaMActions>): Promise<void> => {
        try {
            //диспатчим редьюсеру событие об отправке запроса на сервер
            dispatch({type: CharactersActionTypes.CHARACTERS_REQUESTED});

            //используя API-клиент запрашиваем у сервера страницу с персонажами
            const response = await RaMAPI.getCharactersPage(numPage);
            dispatch({type: CharactersActionTypes.CHARACTERS_RECEIVED, payload: response})
            
        } catch {
            //если при запросе отловили ошибку
            //диспатчим редьюсеру событие о неудаче и передаем сообщение
            dispatch({
                type: CharactersActionTypes.CHARACTERS_FAILURE,
            })
        }
    }
}

export default requestCharacters;
