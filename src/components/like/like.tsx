import React from 'react';
import './like.css';

interface LikePropsInterface {
    isLiked: boolean;
    handleLike: () => void;
}

const Like = (props: LikePropsInterface) => {
    const notLiked: JSX.Element = <span className="material-icons like"
                                        onClick={props.handleLike}>favorite_border</span>
    const liked: JSX.Element = <span className='material-icons like like_solid'
                                     onClick={props.handleLike}>favorite</span>
                                     
    if (props.isLiked == true) return liked;

    return notLiked;

};

export default Like;