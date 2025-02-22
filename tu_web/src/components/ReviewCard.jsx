import { useState, useEffect } from "react";
import Photo from '../assets/pictures/review-pic.png'
import ClientPic1 from '../assets/pictures/client_pic1.png'
import ClientPic2 from '../assets/pictures/client_pic2.png'
import ClientPic3 from '../assets/pictures/client_pic3.png'

export const ReviewCard =(props)=> {
    const [imageSrc, setImageSrc] = useState();
    useEffect(()=> {
        console.log(props);
        if(props.number === 1)setImageSrc(ClientPic1)
        if(props.number === 2)setImageSrc(ClientPic2)
        if(props.number === 3)setImageSrc(ClientPic3)
    },[props])
    return(
        <div className="card bg-secondary rounded-5 w-100" style={{height: "25rem", maxWidth: '40rem',}}>
            <div className="card-body d-flex row align-items-center">
                <p className="card-text align-self-end fw-light">{props.text} </p>
                <div className="d-flex justify-content-center align-self-end">
                    <img src={imageSrc} alt="foto de usuario" style={{height: "4rem", width:'4rem'}} className=" rounded-circle"/>
                    <div className="ms-3 text-start">
                        <h3 className="card-title raleway-bold p-0 m-0">{props.name}</h3>
                        <p className="card-text text-warning p-0 m-0 small nunito-light" style={{fontSize: 12}}>{props.date} </p>
                    </div>
                </div>
            </div>
        </div>
    );
}