import TuLogo from '../assets/logos/tu-logo.png';
import { WhatsAppButton } from './WhatsAppButton';
import BathtubIcon from '../assets/icons/bathtub.png';
import BedIcon from '../assets/icons/bed.png';
import RuleIcon from '../assets/icons/rule.png';
import WifiIcon from '../assets/icons/wifi.png';

export const PropertiesCard =(props)=> {

    return(
        <div className="border rounded-4" style={{maxWidth: '27rem'}}>
            <div className=''>
                <img src={TuLogo} className="card-img-top" alt="..." style={{height: '15rem', objectFit:'cover'}}/>
                <div style={{marginTop: -220, marginBottom: 135}}> 
                    <p className='badge btn-primary ms-4 rounded-4'>{props.type || 'Indefinido'}</p>
                </div>
                <div className='d-flex justify-content-end' style={{marginTop: -0}}>
                    <WhatsAppButton/>
                </div>
            </div>
        <div className="card-body">
          <h5 className="card-title">{props.price || '0 €'}</h5>
          <h5 className="card-title">{props. name || 'Nombre de la propiedad'}</h5>
          <p className="card-text">{props.location || 'Ubicación'}</p>
          <div className='row'>
            <div className='col-12 col-lg-9 row py-2'>
                <span className='col-4 d-flex justify-content-center'>
                    <img src={RuleIcon} className='' style={{objectFit: 'contain', width: 24}}/>
                    <p className='p-0 m-0'>{props.area || '0 m2'} </p>
                </span>
                <span className='col-2 d-flex justify-content-center'>
                    <img src={BedIcon} style={{ objectFit: 'contain', width: 26}}/>
                    <p className='p-0 m-0'>{props.rooms || '0'} </p>
                </span>
                <span className='col-2 d-flex justify-content-center'>
                    <img src={BathtubIcon} className='' style={{objectFit: 'contain', width: 26}}/>
                    <p className=''>{props.bathrooms || '0'} </p>
                </span>
                <span className='col-3 d-flex justify-content-center'>
                    <img src={WifiIcon} style={{objectFit: 'contain', width: 24}}/>
                    <p className=''>{props.wifi || 'N/A'} </p>
                </span>
            </div>
            <button type="button" className="btn btn-secondary me-3 col-12 col-lg-3 my-2">Ver más</button>
          </div>
        </div>
      </div>
    );
}