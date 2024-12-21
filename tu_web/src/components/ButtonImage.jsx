import { useState, useEffect } from 'react';
import Mail from '../assets/icons/envelope-regular.png'
import Scope from '../assets/icons/scope.png'

export const ButtonImage = (props) => {
    const currentIcon = props.icon === 'mail' ? Mail : Scope;

    return(   
        <button className="btn btn-primary" type="button">
            {props.text}
            <span className="ms-2">
                <img style={currentIcon=== Mail? {height: "0.8rem"}: {height: "1.1rem"}} src={currentIcon} alt="icono mail" />
            </span>
        </button>
    );
}