import { useEffect, useState } from 'react';
import Logo from '../assets/logos/footer-tu-logo.png'
import UpArrow from '../assets/icons/go-to-top.png'

export const Footer = () => {

    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 992); // Bootstrap 'lg' breakpoint (≥992px)
        };

        // Inicializar y escuchar cambios en el tamaño de la ventana
        handleResize();
        window.addEventListener("resize", handleResize);

        // Limpieza del evento al desmontar
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return(
        <footer className="pt-5 pb-4 px-5 bg-secondary w-100 mt-auto">
            <div className="row">
                <div className="col-12 col-lg-3 mb-3 order-md-1 d-flex justify-content-center pb-3">
                    <img src={Logo} alt='logo turismo urbano' style={{height:'11rem'}} className=""/>
                </div>
                <div className="col-6 col-lg-2 mb-3 order-md-3 pt-5 ps-5">
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white fs-5 mb-5">Comprar</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white fs-5 mb-2">Alquileres</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white fs-6">Corta Temporada</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white fs-6">Larga Temporada</a></li>
                    </ul>
                </div>
                <div className="col-6 col-lg-2 mb-3 order-md-3 pt-5 ps-5">
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white fs-5 mb-5">Vender</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white fs-5 mb-2">Servicios</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white fs-6">Asesoría</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white fs-6">Gestión</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white fs-6">Seguros</a></li>
                    </ul>
                </div>
                <div className="col-12 col-lg-4 mb-3 order-md-2 order-lg-3">
                    <h5>¿TIENES ALGUNA PREGUNTA?</h5>
                    <h5>CONTÁCTANOS Y HAZ REALIDAD TU ESTANCIA IDEAL</h5>
                    <form className="row g-2">
                        <div className="form col-md-6">
                            <input type="text" className="form-control" id="name" placeholder='Nombre'/>
                        </div>
                        <div className="form col-md-6">
                            <input type="email" className="form-control" id="email" placeholder='Email'/>
                        </div>
                        <div className="form col-md-6">
                            <input type="text" className="form-control" id="phone" placeholder='Teléfono'/>
                        </div>
                        <div className="col-md-6">
                            <select id="inputState" className="form-select">
                            <option selected>Quiero alquilar</option>
                            <option>Quiero comprar</option>
                            <option>Quiero vender</option>
                            <option>Quiero información</option>
                            </select>
                        </div>
                        <div className="form col-12">
                            <textarea type="text" className="form-control" id="message" placeholder='Mensaje' style={{height: 120, resize: "none"}} />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary w-100 mb-3">Enviar</button>
                            <p className='text-center' style={{fontSize: '0.9rem'}}>
                                Al hacer click en Enviar aceptas nuestros {' '}
                                <a href="#" className='link-light link-underline-light'> 
                                    Términos y condiciones y políticas de privacidad
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row" style={{marginTop: isLargeScreen ? -80 : "initial",}}>
                <div className="col-10 col-lg-3 mb-3 ps-5 order-md-3" style={{marginTop: isLargeScreen ? -100 : "initial", paddingLeft:  isLargeScreen ? 50: "initial",}}>
                    <p>Dirección:</p>
                    <p>Calle Nuestra Señora de la Encarnación 1, local Bajo 2, Valle San Lorenzo, 38262, Arona, Tenerife, España</p>
                    <span> <p>+34 608 37 37 97</p> </span>
                    <span> <p>info@turismourbano.org</p> </span>
                </div>

                <div className="col-12 col-lg-2 mb-3 ps-5 order-md-1 order-lg-3">
                    <a href="#" className="nav-link p-0 text-white fs-5 mb-5">Nosotros</a>
                </div>

                <div className="col-12 col-lg-2 mb-3 ps-5 order-md-2 order-lg-3 mb-5">
                    <h5 className="" >Síguenos</h5>
                </div>
                <div className="col-12 col-lg-1 mb-3 d-flex justify-content-center ms-auto order-md-4 order-lg-3" 
                    style={{marginTop: isLargeScreen ? -20 : "initial",}}
                >
                    <a onClick={()=>goToTop()}> <img src={UpArrow} style={{height:'4rem'}}/> </a>
                </div>
            </div>

            <div className="row pt-3 mt-5 border-top mx-4">
                <div className='col-12 col-lg-6 text-center text-lg-start'> 
                    <p> Copyright  &copy; 2024 Turismo URBANO</p>
                </div>
                <div div className='col-12 col-lg-4 ms-auto d-flex justify-content-center justify-content-lg-end'> 
                    <ul className="list-unstyled d-flex">
                        <li className="ms-3"><a className='link-light link-underline-light' href="#">Política de privacidad</a></li>
                        <li className="ms-3"><a className='link-light link-underline-light' href="#">Política de Cookies</a></li>
                        <li className="ms-3"><a className='link-light link-underline-light' href="#">Términos y Condiciones</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}