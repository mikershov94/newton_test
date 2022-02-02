import React from 'react';
import './error-message.css';

const ErrorMessage = (): JSX.Element => {
    return(
        <div className="error-message">
            <div>
                <span className="material-icons outlined">
                    highlight_off
                </span>
            </div>
            <div className="error-message__text">
                Персонажи мультсериала не смогли заполнить список :(
            </div>
        </div>
    );
}

export default ErrorMessage;