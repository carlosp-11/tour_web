import TuLogo from '../assets/logos/tu-logo.png';
import { WhatsAppButton } from './WhatsAppButton';
import BathtubIcon from '../assets/icons/bathtub.png';
import BedIcon from '../assets/icons/bed.png';
import RuleIcon from '../assets/icons/rule.png';
import WifiIcon from '../assets/icons/wifi.png';
import ExamplePic1 from '../assets/pictures/example-card-1.png';
import ExamplePic2 from '../assets/pictures/example-card-2.png';
import ExamplePic3 from '../assets/pictures/example-card-3.png';
import { useState, useEffect } from 'react';

export const PropertiesCard =(props)=> {
    const [currentPicture, setCurrentNumber] = useState(ExamplePic1);

     useEffect(()=>{
        if(props.number === 1) setCurrentNumber(ExamplePic1)
        if(props.number === 2) setCurrentNumber(ExamplePic2)
        if(props.number === 3) setCurrentNumber(ExamplePic3)
     },[props])

    return(
        <div className="border rounded-4 shadow raleway my-2" style={{width: '25rem'}}>
            <div className=''>
                <img src={props.image || currentPicture} className="card-img-top bg-dark-subtle rounded-4" alt="..." style={{height: '15rem', width:'25rem', objectFit:'cover'}}/>
                <div style={{marginTop: -220, marginBottom: 135}}> 
                    <p className='badge btn-primary ms-4 rounded-4 raleway fw-light px-3 py-2'>{props.type || 'Indefinido'}</p>
                </div>
                <div className='d-flex justify-content-end' style={{marginTop: -0}}>
                    <WhatsAppButton/>
                </div>
            </div>
            <div className="card-body px-4 pb-3" style={{marginTop: -20}}>
                <h5 className="card-title fw-bold fs-3 pb-2">{props.price || '0 €'}</h5>
                <h5 className="card-title fw-bold fs-5 pb-1">{props.name || 'Nombre de la propiedad'}</h5>
                <p className="card-text text-primary">{props.location || 'UBICACIÓN'}</p>
                <div className='row'>
                    <div className='col-12 col-lg-8 row py-2 mx-0 px-0'>
                        <span className='col-4 d-flex justify-content-center mx-0 px-0'>
                            <p className='p-0 m-0 fw-bold fs-5'>
                                <img src={RuleIcon} className='me-1' style={{objectFit: 'contain', width: 15, height:'auto'}}/>
                                {props.area || '0'}m<span className='fs-6 small align-top'>2</span> 
                            </p>
                        </span>
                        <span className='col-3 d-flex justify-content-center'>
                            <p className='p-0 m-0 fw-bold fs-5'>
                                <img src={BedIcon} style={{ objectFit: 'contain', width: 18, height:'auto'}}/>
                                {props.rooms || '0'} 
                            </p>
                        </span>
                        <span className='col-3 d-flex justify-content-center'>
                            <p className='p-0 m-0 fw-bold fs-5'>
                                <img src={BathtubIcon} className='' style={{objectFit: 'contain', width: 18, height:'auto'}}/>
                                {props.bathrooms || '0'} 
                            </p>
                        </span>
                        <span className='col-2 d-flex justify-content-center'>
                            <p className='p-0 m-0'>
                                <img src={WifiIcon} style={{objectFit: 'contain', width: 18, height:'auto'}}/>
                            </p>
                        </span>
                    </div>
                    <div className='col-12 col-lg-4 my-2'>
                        <button type="button" className="btn btn-secondary fs-6 w-100">Ver más</button>
                    </div>
                </div>
            </div>
      </div>
    );
}