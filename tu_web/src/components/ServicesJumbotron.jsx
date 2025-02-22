import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonImage } from "./ButtonImage";
import ServicesPic from '../assets/pictures/services-pic.png';

export const ServicesJumbotron = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);
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

    return (
        <div className="d-flex flex-wrap justify-content-center align-items-center row bg-dark-subtle px-lg-5 px-xl-5 px-4 px-md-5 py-5">
            <div className="col-12 col-lg-auto d-flex justify-content-center my-lg-5">
                <img 
                    src={ServicesPic} 
                    alt="Servicios" 
                    className="" 
                    style={{height: 'auto', width:'100%', maxHeight: 415}
                }/>
            </div>
            <div className="col-12 col-lg d-flex justify-content-center my-3 my-lg-5 row mx-0 px-0">
                <div className="col-12">
                    <h2 className="raleway-bold fs-1">Servicios Personalizados para Compradores, Inquilinos y Propietarios</h2>
                    <h5 className="d-none d-lg-block py-2 nunito-light tu-font">
                        Gestionamos propiedades, asesoramos en compra-venta, y ofrecemos mantenimiento completo.
                    </h5>
                    <p className=" pb-5 pt-3 pt-lg-1 pb-lg-4"> 
                        Ofrecemos soluciones a medida para compradores, inquilinos y propietarios. Desde la gestión integral de 
                        propiedades hasta asesoría experta en compra-venta y servicios de mantenimiento, nos encargamos de cada 
                        detalle para que tengas tranquilidad y confianza en cada operación inmobiliaria.
                    </p>
                </div>
                <div className="col-12 row d-flex justify-content-center "> 
                    <div className="col d-flex justify-content-center">
                        <ButtonImage text='Saber más' icon='none' someFunction={(e)=>navigate('/servicios')}/>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <ButtonImage text={isLargeScreen? 'Consulta rápida': 'Consulta'} icon="ws"/>
                    </div>
                </div>
            </div>
        </div>
    );
}