import React from 'react';
import url from '../../resources/images/sprite.svg';

const Icon = (props) => {
    return (
        
        <svg  className={props.class}>
             <use xlinkHref={`${url}#icon-${props.icon}`} />
        </svg>
    );
};

export default Icon;