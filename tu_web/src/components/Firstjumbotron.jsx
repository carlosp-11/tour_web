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
         <div className='py-5 d-flex align-items-center' style={{
                    backgroundColor: "#efefef",
                    backgroundImage: `url(${GreenPicture})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    maxHeight: "91vh",
                    //width: "100%",
                }}>
                    <div className='row'>
                        <div className='col-12 text-center text-white'>
                            <h2>Descubre tu Hogar en Tenerife </h2>
                            <h6 className={`${!isLargeScreen? 'd-none': ''}`} > Encuentra el lugar perfecto para alguilar o comprar, adaptado a tus necesidades. </h6>
                        </div>
                        <div className='col-12 col-lg-8 ms-auto px-5'>
                            <SimpleSearchbar/>
                        </div>
                        <div className={`col-6 d-flex align-items-center justify-content-center ${isLargeScreen? 'd-none': ''}`}>
                            <ButtonImage text= "Contacto" icon="mail"/>
                        </div>
                        <div className={`col-6 col-lg-2 d-flex ${isLargeScreen? 'justify-content-end': 'justify-content-center'} pe-4`}>
                            <WhatsAppButton/>
                        </div>
                    </div>
        </div>
    );
}