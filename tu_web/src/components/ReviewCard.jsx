import { useState, useEffect } from "react";
import Photo from '../assets/pictures/review-pic.png'

export const ReviewCard =(props)=> {
    return(
        <div className="card bg-secondary rounded-5" style={{height: "25rem", minWidth: '23rem', maxWidth: '40rem',}}>
            <div className="card-body d-flex row align-items-center">
                <p className="card-text align-self-end fw-light">{props.text} </p>
                <div className="d-flex justify-content-center align-self-end">
                    <img src={Photo} alt="foto de usuario" style={{height: "4rem"}} className=""/>
                    <div className="ms-3 text-start">
                        <h3 className="card-title raleway-bold p-0 m-0">{props.name}</h3>
                        <p className="card-text text-warning p-0 m-0 small nunito-light" style={{fontSize: 12}}>{props.date} </p>
                    </div>
                </div>
            </div>
        </div>
    );
}