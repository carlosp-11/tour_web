import { useEffect, useState } from 'react';
import { WhatsAppButton } from './WhatsAppButton';
import { ButtonImage } from './ButtonImage';
import { SimpleSearchbar } from './SimpleSearchbar';
import GreenPicture from '../assets/pictures/green-picture.png';

export const FirstJumbotron =()=>{
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

    return (
         <div className={`pt-5 px-lg-5 px-4 mx-0 d-flex flex-column  ${isLargeScreen? 'justify-content-center' : 'justify-content-around'}`} 
            style={{
                backgroundColor: "#efefef",
                backgroundImage: `url(${GreenPicture})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                //maxHeight: "90rem",
                height: "40rem",
            }}
        >
                <div className='col-12 text-center text-white'>
                    <h1 className='raleway-bold pb-3' style={{fontSize: 47}}>Descubre Tu <br/> Hogar en Tenerife </h1>
                    <h6 className='nunito-light small pb-5' style={!isLargeScreen? {display:'none'}: {}}> 
                        Encuentra el lugar perfecto para alquilar o comprar, adaptado a tus necesidades. 
                    </h6>
                </div>
                <div className={`col-12 py-0 my-0 px-lg-5`}>
                    <SimpleSearchbar/>
                </div>
                { !isLargeScreen && (
                    <div className='col-12 d-flex justify-content-around gx-0 mx-0 px-0'>
                        <span className='align-self-center'>
                            <ButtonImage text= "Contacto" icon="mail"/>
                        </span>
                        <WhatsAppButton/>
                    </div>
                )}
            </div>
    );
}