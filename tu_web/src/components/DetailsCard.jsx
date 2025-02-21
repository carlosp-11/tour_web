import {
    EmailShareButton,
    FacebookShareButton,
    WhatsappShareButton,
    EmailIcon,
    FacebookIcon,
    WhatsappIcon,
  } from "react-share";
  import { ButtonImage } from "./ButtonImage";

export const DetailsCard =(props)=> (
    <div className="card mx-auto rounded-4 shadow">
        <div className="text-end"> 
            <div className="btn-group dropup">
                <button type="button" className="btn py-0 rounded-4" data-bs-toggle="dropdown" aria-expanded="false">
                    <p className="tu-font fs-6 pb-0 my-0 d-flex align-items-center raleway"> <i className="bi bi-box-arrow-up-right fs-4"/> <span className="ps-1">Compartir </span>  </p>
                </button>
                <ul className="dropdown-menu bg-secondary-subtle py-3 row">
                    <li className="d-flex justify-content-between">
                        <FacebookShareButton 
                            url={`${import.meta.env.VITE_BASENAME_URL}/propiedades/${props.property.id}`}
                            children={<FacebookIcon size={30} round={true} />} 
                        />
                        <WhatsappShareButton 
                            url={`${import.meta.env.VITE_BASENAME_URL}/propiedades/${props.property.id}`}
                            title="Encontré esta propiedad en Turismo Urbano que te puede interesar:"
                            children={<WhatsappIcon size={30} round={true} />} 
                        />
                        <EmailShareButton 
                            url={`${import.meta.env.VITE_BASENAME_URL}/propiedades/${props.property.id}`}
                            body="Encontré esta propiedad en Turismo Urbano que te puede interesar:" 
                            subject="Encontré esta propiedad en Turismo Urbano que te puede interesar:"
                            children={<EmailIcon size={30} round={true} />} 
                        />
                    </li>
                </ul>
            </div>
        </div>
        <div className="card-body">
            <p className="raleway-bold fs-2 my-0">{props.property.name}</p>
            <p className="tu-secondary raleway fs-5 mb-2 text-uppercase pb-3">{props.property.town.name}</p>
            <p className="fs-1 raleway-bold"> 
                € {props.property.price}  
                <span className="fs-6 fw-normal ps-2"> {props.property.transaction ==='compra'? '(Venta)': 'Alquiler'} </span>
            </p>
            <div className="row pt-4">
                <div className="col">
                    <ButtonImage text='Más Info' icon='none' someFunction={(e)=>navigate('/contacto')}/>
                </div>
                <div className="col">
                    <ButtonImage text='Contactar' icon="none-ws"/>
                </div>
            </div>
        </div>
    </div>
)