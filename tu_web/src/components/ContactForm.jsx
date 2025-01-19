export const ContactForm = () => {
    return(
        <form className="row g-2 nunito">
            <div className="form col-md-6">
                <input type="text" className="form-control bg-light border border-0 text-primary" id="name" placeholder='Nombre'/>
            </div>
            <div className="form col-md-6">
                <input type="email" className="form-control bg-light border border-0" id="email" placeholder='Email'/>
            </div>
            <div className="form col-md-6">
                <input type="text" className="form-control bg-light border border-0" id="phone" placeholder='Teléfono'/>
            </div>
            <div className="col-md-6">
                <select id="inputState" className="form-select bg-light border border-0" defaultValue="Quiero alquilar">
                    <option>Quiero alquilar</option>
                    <option>Quiero comprar</option>
                    <option>Quiero vender</option>
                    <option>Quiero información</option>
                </select>
            </div>
            <div className="form col-12">
                <textarea type="text" className="form-control bg-light border border-0" id="message" placeholder='Mensaje' style={{height: 120, resize: "none"}} />
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-warning fw-bolder nunito w-100 mb-3">Enviar</button>
                <p className='text-center small' style={{fontSize: '0.9rem'}}>
                    Al hacer click en Enviar aceptas nuestras {' '}
                    <a className='link-light link-underline-light' onClick={()=>navigate('politica-privacidad')} role='button'> 
                        Políticas de privacidad
                    </a>
                </p>
            </div>
        </form>
    );
}