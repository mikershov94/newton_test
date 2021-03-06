import React from 'react';
import { LikeProps } from '../../types/like-types';
import './like.css';

const Like = (props: LikeProps): JSX.Element => {
    const notLiked: JSX.Element = <span className="material-icons like"
                                        onClick={props.handleLike}>favorite_border</span>
    const liked: JSX.Element = <span className='material-icons like like_solid'
                                     onClick={props.handleDislike}>favorite</span>
                                     
    if (props.isLiked == true) return liked;

    return notLiked;

};

export default Like;