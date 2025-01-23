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
         <div className={`py-5 px-0 container-fluid d-flex justify-content-center align-items-center ${!isLargeScreen?'w-100':'' }`} 
            style={{
                backgroundColor: "#efefef",
                backgroundImage: `url(${GreenPicture})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                maxHeight: "91vh",
                height: isLargeScreen? "85vh": "",
                //width: "100%",
            }}
        >
            <div className='row d-flex align-items-center justify-content-center'>
                <div className='col-12 text-center text-white'>
                    <h1 className='raleway-bold pb-3' style={{fontSize: 45}}>Descubre Tu <br/> Hogar en Tenerife </h1>
                    <h6 className='nunito-light small pb-5' style={!isLargeScreen? {display:'none'}: {}}> 
                        Encuentra el lugar perfecto para alquilar o comprar, adaptado a tus necesidades. 
                    </h6>
                </div>
                <div className={`col-11 col-lg-10 d-flex align-items-center justify-content-around`}>
                    <SimpleSearchbar/>
                </div>
                {/* <div className='col-12 text-center'>
                    <span style={isLargeScreen? {display:'none'}: {}}>
                        <ButtonImage text= "Contacto" icon="mail"/>
                    </span>
                    <WhatsAppButton/>
                </div> */}
            </div>
        </div>
    );
}