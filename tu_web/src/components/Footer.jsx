import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContactForm } from './ContactForm';
import Logo from '../assets/logos/footer-tu-logo.png';
import UpArrow from '../assets/icons/go-to-top.png';
import WhiteUpArrow from '../assets/icons/white-up-arrow.png';
import PhoneIconSVG from '../assets/svg/phone-solid.svg';
import MailIconSVG from '../assets/svg/mail-envelope.svg';
import FacebookIconSVG from '../assets/svg/facebook-icon.svg';
import InstagramIconSVG from '../assets/svg/instagram-icon.svg';
import LinkedInIconSVG from '../assets/svg/linkedin-icon.svg';

export const Footer = () => {

    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const [imageSrc, setImageSrc] = useState(UpArrow) // Imagen original
    const navigate = useNavigate();

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

    const getCurrentYear = () => {
        const currentDate = new Date();
        return currentDate.getFullYear();
      };

    const goToTop = () => {
        // document.documentElement.scrollTop = 0; // Prueba este
        // document.body.scrollTop = 0;           // O este, dependiendo del navegador
        // window.scrollTo({ top: 0, behavior: "smooth",});

       const scrollContainer = document.body.scrollTop > 0 ? document.body : document.documentElement;

       scrollContainer.scrollTo({top: 0, behavior: "smooth",});
    };

    return(
        <footer className="pt-5 pb-4 px-4 px-lg-5 px-xl-5 bg-secondary w-100 mt-auto">
            <div className="row">
                <div className="col-12 col-lg-3 mb-3 order-1 d-flex justify-content-center pb-3">
                    <img src={Logo} alt='logo turismo urbano' style={{height:'11rem'}} className=""/>
                </div>
                <div className="col-6 col-lg-2 mb-3 order-3 order-md-3 pt-5 ps-5 raleway">
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a role='button' className="nav-link p-0 text-white fs-5 mb-5 fw-semibold" onClick={()=>navigate('/comprar')}>Comprar</a></li>
                        <li className="nav-item mb-2"><a role='button' className="nav-link p-0 text-white fs-5 mb-2 fw-semibold" onClick={()=>navigate('/alquilar')}>Alquileres</a></li>
                        <li className="nav-item mb-2"><a role='button' className="nav-link p-0 text-white fs-6" onClick={()=>navigate('/alquilar')}>Corta Temporada</a></li>
                        <li className="nav-item mb-2"><a role='button' className="nav-link p-0 text-white fs-6" onClick={()=>navigate('/alquilar')}>Larga Temporada</a></li>
                    </ul>
                </div>
                <div className="col-6 col-lg-2 mb-3 order-3 order-md-3 pt-5 ps-5 raleway">
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a role='button' className="nav-link p-0 text-white fs-5 mb-5 fw-semibold" onClick={()=>navigate('/vender')}>Vender</a></li>
                        <li className="nav-item mb-2"><a role='button'className="nav-link p-0 text-white fs-5 mb-2 fw-semibold" onClick={()=>navigate('/servicios')}>Servicios</a></li>
                        <li className="nav-item mb-2"><a role='button' className="nav-link p-0 text-white fs-6" onClick={()=>navigate('/servicios')}>Asesoría</a></li>
                        <li className="nav-item mb-2"><a role='button' className="nav-link p-0 text-white fs-6" onClick={()=>navigate('/servicios')}>Gestión</a></li>
                        <li className="nav-item mb-2"><a role='button' className="nav-link p-0 text-white fs-6" onClick={()=>navigate('/servicios')}>Seguros</a></li>
                    </ul>
                </div>
                <div className="col-12 col-lg-4 mb-3 order-2 order-md-2 order-lg-3 order-2">
                    <h5 className='raleway spaced-letter'>¿TIENES ALGUNA PREGUNTA?</h5>
                    <h5 className='raleway spaced-letter'>CONTÁCTANOS Y HAZ</h5>
                    <h5 className='raleway spaced-letter'>REALIDAD TU ESTANCIA IDEAL</h5>
                    <ContactForm/>
                </div>
            </div>
            <div className="row" style={{marginTop: isLargeScreen ? -80 : "initial", letterSpacing: 2}}>
                <div className="col-10 col-lg-3 mb-3 ps-5 order-md-3 order-3 raleway" style={{marginTop: isLargeScreen ? -100 : "initial", paddingLeft:  isLargeScreen ? 50: "initial",}}>
                    <p className='fw-semibold'>Dirección:</p>
                    <p>Calle Nuestra Señora de la Encarnación 1, local Bajo 2, Valle San Lorenzo, 38262, Arona, Tenerife, España</p>
                    <span className=''> <p> <img src={PhoneIconSVG} /> +34 608 37 37 97</p> </span>
                    <span> <p> <img src={MailIconSVG} /> info@turismourbano.org</p> </span>
                </div>

                <div className="col-12 col-lg-2 mb-3 ps-5 order-1 order-md-1 order-lg-3 raleway">
                    <a role='button' className="nav-link p-0 text-white fs-5 mb-5 fw-semibold" onClick={()=>navigate('/nosotros')}>Nosotros</a>
                </div>

                <div className="col-12 col-lg-2 mb-3 ps-5 order-2 order-md-2 order-lg-3 mb-5 raleway row">
                    <h5 className="fw-semibold col-12 pb-0 mb-0" >Síguenos</h5>
                    <span className='col-12 d-flex'>
                        <a href="https://www.facebook.com/turismourbanosl?locale=es_ES" className='pe-2 link-underline link-underline-opacity-0'><img src={FacebookIconSVG} /> </a>
                        <a href="#" className='px-2 link-underline link-underline-opacity-0'><img src={InstagramIconSVG} /> </a>
                        <a href="#" className='px-2 link-underline link-underline-opacity-0'><img src={LinkedInIconSVG} /> </a>
                    </span>
                </div>
                <div className="col-12 col-lg-1 mb-3 d-flex justify-content-center ms-auto pe-0 pe-lg-5 pe-xl-5 order-md-4 order-lg-3 order-4" 
                    style={{marginTop: isLargeScreen ? -20 : "initial",}}
                >
                    <div> 
                        <img src={imageSrc} alt='botón' style={{height:'4rem'}} 
                            onMouseOver={()=>setImageSrc(WhiteUpArrow)}
                            onMouseOut={()=>setImageSrc(UpArrow)}
                            onClick={goToTop}
                        /> 
                    </div>
                </div>
            </div>
            <div className="row pt-3 mt-5 border-top">
                <div className='col-12 col-lg row mx-0'> 
                    <p className='nunito-compact small fw-light text-start col'> Copyright  &copy; {getCurrentYear()} <br className='d-md-none' /> <span className='fw-bold'> Turismo URBANO </span></p>
                    <a href='#' className='nunito-compact small fw-light text-end col link-light link-underline link-underline-opacity-0 pe-lg-4'> Desarrollado por <br className='d-md-none' />  <span className='fw-bold'> 701 STUDIO </span></a>
                </div>
                <div className='col-12 col-lg-auto d-flex justify-content-center justify-content-lg-end'> 
                    <ul className="list-unstyled d-flex">
                        <li className="px-2 border-end"><a className='link-light link-underline-light nunito-compact small fw-light' onClick={()=>navigate('aviso-legal')} role='button'>Aviso Legal</a></li>
                        <li className="px-2 border-end"><a className='link-light link-underline-light nunito-compact small fw-light' onClick={()=>navigate('politica-cookies')} role='button'>Política de Cookies</a></li>
                        <li className="ms-2"><a className='link-light link-underline-light nunito-compact small fw-light' onClick={()=>navigate('politica-privacidad')} role='button'>Política de privacidad</a></li>
                    </ul>
                </div>
            </div>
            <div className='py-5 d-lg-none'></div>
        </footer>
    );
}
