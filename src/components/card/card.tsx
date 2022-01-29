import React, { Component } from "react";
import './card.css';

class Card extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            image: ''
        };
        
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        this.props.rmService
            .getCharacter(`/character/${this.props.id}`)
            .then((character) => {
                this.setState({
                    name: character.name,
                    image: character.image
                })
            })
    }

    render() {
        return(
            <div className="card">
                <img src={this.state.image} 
                     alt="картинка"
                     className="card__img"/>
                <div className="card__text">
                    <div>{this.state.name}</div>
                    
                </div>
            </div>
        );
    }
}

export default Card;