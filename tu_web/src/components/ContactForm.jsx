import { useEffect, useState } from "react";

export const ContactForm = (props) => {
    const [isGreen, setIsGreen]= useState(true);
    useEffect(()=> {
        if(props.changeColor === true) setIsGreen(false);
    }, [props])
    return(
        <form className="row g-2 nunito">
            <div className="form col-md-6">
                <input type="text" className={`form-control text-primary ${isGreen? 'bg-light border border-0' : 'bg-secondary-subtle'}`} id="name" placeholder='Nombre'/>
            </div>
            <div className="form col-md-6">
                <input type="email" className={`form-control text-primary ${isGreen? 'bg-light border border-0' : 'bg-secondary-subtle'}`}id="email" placeholder='Email'/>
            </div>
            <div className="form col-md-6">
                <input type="text" className={`form-control text-primary ${isGreen? 'bg-light border border-0' : 'bg-secondary-subtle'}`} id="phone" placeholder='Teléfono'/>
            </div>
            <div className="col-md-6">
                <select id="inputState" className={`form-select ${isGreen? 'bg-light border border-0' : 'bg-secondary-subtle'}`} defaultValue="Quiero alquilar">
                    <option>Quiero alquilar</option>
                    <option>Quiero comprar</option>
                    <option>Quiero vender</option>
                    <option>Quiero información</option>
                </select>
            </div>
            <div className="form col-12">
                <textarea type="text" className={`form-control text-primary ${isGreen? 'bg-light border border-0' : 'bg-secondary-subtle'}`}id="message" placeholder='Mensaje' style={{height: 120, resize: "none"}} />
            </div>
            <div className="col-12">
                <button type="submit" className={`btn  fw-bolder nunito w-100 mb-3 ${isGreen? 'btn-warning':'btn-secondary'}`}>Enviar</button>
                <p className='text-center small' style={{fontSize: '0.9rem'}}>
                    Al hacer click en Enviar aceptas nuestras {' '}
                    <a className={`${isGreen? 'link-light link-underline-light' : 'link-dark link-underline-dark'}`} onClick={()=>navigate('politica-privacidad')} role='button'> 
                        Políticas de privacidad
                    </a>
                </p>
            </div>
        </form>
    );
}