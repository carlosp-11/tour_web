import TuLogo from '../assets/logos/tu-logo.png';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { WhatsAppButton } from './WhatsAppButton';
import BathtubIcon from '../assets/icons/bathtub.png';
import BedIcon from '../assets/icons/bed.png';
import RuleIcon from '../assets/icons/rule.png';
import WifiIcon from '../assets/icons/wifi.png';
import Placeholder from "../assets/svg/PropertyPlaceholder.svg";


export const PropertiesCard =(props)=> {
    const navigate = useNavigate();
    console.log('card', props.data);

    const goingTo =() => {
        console.log('enviaremos estos props', props,);
        navigate(`/propiedades/${props.data.id? props.data.id: props.data}`);
    };

    return(
        <div className="border rounded-4 shadow raleway my-2 w-100" /*style={{width: '23rem'}}*/>
            <div className='image-container position-relative pb-5'>
                <a type='button' onClick={goingTo}>
                    <img 
                        src={props.image || Placeholder} 
                        className="card-img-top bg-dark-subtle rounded-4 zoomable-image" 
                        alt="..." 
                        style={{height: '15rem', width:'100%', objectFit:'cover'}}
                    />
                </a>
                <div style={{position:'absolute', top: 10 }}> 
                    <p className='badge btn-primary ms-4 rounded-4 raleway fw-light px-3 py-2 text-capitalize'>{props.type || 'Indefinido'}</p>
                </div>
                <div className='position-absolute' style={{bottom:-0, right: 0}}>
                    <WhatsAppButton/>
                </div>
            </div>
            <div className="card-body px-4 pb-3" style={{marginTop: -20}}>
                <h5 className="card-title fw-bold fs-3 pb-2"> € {props.price || '0'}</h5>
                <h5 className="card-title fw-bold fs-5 pb-1 text-truncate">{props.name || 'Nombre de la propiedad'}</h5>
                <p className="card-text text-primary">{props.location || 'UBICACIÓN'}</p>
                <div className='row gx-0'>
                    <div className='col-12 col-lg-8 row py-2 mx-0 px-0 gx-0'>
                        <span className=' col-4 col-lg-5 d-flex justify-content-center mx-0 px-0 gx-0'>
                            <p className='p-0 m-0 gx-0 fw-bold fs-5'>
                                <img src={RuleIcon} className='' style={{objectFit: 'contain', width: 15, height:'auto'}}/>
                                {props.area || '0'}m<span className='fs-6 small align-top'>2</span> 
                            </p>
                        </span>
                        <span className=' col-3 col-lg-2 d-flex justify-content-center mx-lg-1'>
                            <p className='p-0 m-0 fw-bold fs-5'>
                                <img src={BedIcon} style={{ objectFit: 'contain', width: 18, height:'auto'}}/>
                                {props.rooms || '0'} 
                            </p>
                        </span>
                        <span className='col-3 col-lg-2 d-flex justify-content-center mx-lg-1'>
                            <p className='p-0 m-0 fw-bold fs-5'>
                                <img src={BathtubIcon} className='' style={{objectFit: 'contain', width: 18, height:'auto'}}/>
                                {props.bathrooms || '0'} 
                            </p>
                        </span>
                        { 
                            props.data && props.data.amenities.find(item => item.name === 'Wifi')&&
                            (<span className='col-2 d-flex justify-content-center'>
                                <p className='p-0 m-0'>
                                    <img src={WifiIcon} style={{objectFit: 'contain', width: 18, height:'auto'}}/>
                                </p>
                            </span>)
                        }
                    </div>
                    <div className='col-12 col-lg-4 my-2'>
                        <button type="button" className="btn btn-secondary fs-6 w-100" onClick={goingTo}>Ver más</button>
                    </div>
                </div>
            </div>
      </div>
    );
}