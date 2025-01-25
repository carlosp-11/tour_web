import TuLogo from '../assets/logos/tu-logo.png';
import InvisibleLogo from '../assets/logos/invisible-tu-logo.png';
import NiceLivingroom from '../assets/pictures/beige-living-room.png';
import NiceSofa from '../assets/pictures/sofa-and-table.png';
import { useEffect, useState } from 'react';


export const FinalJumbotron = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    
     useEffect(() => {
            const handleResize = () => {
                setIsLargeScreen(window.innerWidth >= 992); // Bootstrap 'lg' breakpoint (≥992px)
                setIsSmallScreen(window.innerWidth <= 768); // Bootstrap 'lg' breakpoint (≥992px)
            };
    
            // Inicializar y escuchar cambios en el tamaño de la ventana
            handleResize();
            window.addEventListener("resize", handleResize);
    
            // Limpieza del evento al desmontar
            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }, []);

    return(
        <div className='py-5 container-fluid px-4 mx-0 d-flex justify-content-center row' 
            style={{
                backgroundColor: "#efefef",
                backgroundImage: `url(${InvisibleLogo})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                //height: "300px",
                //width: "100%",
            }}
        >
            <div className='d-flex justify-content-center align-items-center row py-5'>
                <div className='col-12 col-md- col-lg-4 d-flex flex-column'>
                    <h5 className='tu-font nunito-light' style={{display: !isLargeScreen? 'none': ''}}>Sobre nosotros</h5>
                    <h1 className='raleway-bold pb-5 pe-3' style={{display: !isLargeScreen? 'none':''}}> Confianza y Atención Personalizada </h1>
                    <button 
                        type='button' 
                        className='btn btn-primary fw-light col-lg-8 mt-5'
                        style={{ display: !isLargeScreen ? 'none':''}}
                    >
                        Conoce más sobre nosotros
                    </button>
                </div>
                <div className='col-12 col-md- col-lg-4 d-flex justify-content-center mx-0 px-0'>
                    <img 
                        src={NiceSofa} 
                        alt='foto de sofá y mesa de centro'
                        className='rounded-4' 
                        style={{width: "100%", height: 'auto', maxWidth: '40rem', minHeight:'24rem', objectFit: 'cover', maxHeight: '30rem'}}
                    />
                </div>
                <div className='col-12 col-md- col-lg-4 ps-lg-5'>
                    <img 
                        src={TuLogo} 
                        alt='foto de sofá y mesa de centro' 
                        className='' 
                        style={{ height: "12rem", width:"auto", objectFit: 'contain', display: !isLargeScreen? 'none':''}}
                    />
                    <h1 className='raleway-bold py-4' style={{display: isLargeScreen? 'none':''}}> Confianza y Atención Personalizada </h1>
                    <p className='pb-5 pb-md-3 pt-lg-4'> En Turismo URBANO nos dedicamos a ofrecer espacios cómodos y bien equipados para 
                        quienes buscan alquilar o comprar inmuebles en Tenerife. Nuestro compromiso es 
                        brindar un servicio personalizado, centrado en la satisfacción de nuestro clientes y 
                        ajustado a las necesidades de turistas, profesionales y nómadas digitales que desean 
                        disfrutar de las bondades de esta maravillosa isla.
                    </p>
                    <button 
                        type='button' 
                        className='btn btn-primary fw-light col-lg-8 col-md-4 col-12'
                        style={{display: isLargeScreen? 'none': ''}}
                    >
                        Conoce más sobre nosotros
                    </button>
                </div>
                <div className='col'>
                  
                </div>
            </div>
            <div className='d-flex justify-content-center align-items-center row py-5'>
                <div className="col-12 col-md- col-lg-6 rounded-4 d-flex justify-content-center">
                    <img 
                        src={NiceLivingroom} 
                        alt='foto de sofá y mesa de centro' 
                        className='rounded-4'
                        style={{width: "100%", height: 'auto', maxWidth: '40rem', minHeight:'24rem', objectFit: 'cover'}}
                    />
                </div>
                <div className='col my-lg-5'>
                    <h1 className='raleway-bold py-4'> ¿Quieres vender tu propiedad en Tenerife?</h1>
                    <p className='pb-5 pb-md-3 pb-lg-1'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat lacus a 
                        purus rhoncus pellentesque eu nec mauris. Maecenas at lacus nunc. Quisque pellentesque 
                        metus dui, in blandit nisl pulvinar quis. Sed eget erat rhoncus, commodo dui sit amet, 
                        sagittis arcu.
                    </p>
                    <button type='button' className='btn btn-primary fw-light col-12 col-md-3 col-lg-3 py-2'>Saber más</button>
                </div>
            </div>
        </div>
    );
}