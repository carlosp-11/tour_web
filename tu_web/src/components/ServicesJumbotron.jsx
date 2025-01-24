import { ButtonImage } from "./ButtonImage";
import ServicesPic from '../assets/pictures/services-pic.png';
import { useEffect, useState } from "react";

export const ServicesJumbotron = () => {
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
        <div className="d-flex flex-wrap justify-content-center align-items-center row bg-dark-subtle py-5 px-5">
            <div className="col-12 col-lg d-flex justify-content-center my-lg-5 mx-2">
                <img 
                    src={ServicesPic} 
                    alt="Servicios" 
                    className="" 
                    style={{height: 'auto', width:'100%', minWidth: isLargeScreen? 620 : '', maxWidth: 720 , maxHeight: 415}
                }/>
            </div>
            <div className="col-12 col-lg d-flex justify-content-center my-3 my-lg-5 row">
                <div className="col-12">
                    <h2 className="raleway-bold fs-1">Servicios Personalizados para Compradores, Inquilinos y Propietarios</h2>
                    <h5 className="d-none d-lg-block py-2 nunito-light tu-font">
                        Gestionamos propiedades, asesoramos en compra-venta, y ofrecemos mantenimiento completo.
                    </h5>
                    <p className=" pb-5 pt-3 pt-lg-1 pb-lg-4"> 
                        Sed purus ex, dapibus condimentum facilisis a, ullamcorper sed augue. Ut augue velit, vehicula sed 
                        justo vitae, condimentum consectetur magna. Proin quis molestie sapien, nec eleifend dui. Nulla 
                        elementum feugiat blandit. Vestibulum nec lectus dignissim leo bibendum lobortis.
                    </p>
                </div>
                <div className="col-12 row mx-0 px-0 gx-1 d-flex justify-content-center ">
                    {isLargeScreen && (
                        <div className="col d-flex justify-content-center text-nowrap">
                            <button type="button" className="btn btn-secondary fw-light px-5" style={{minWidth: ''}}> 
                                <p className="my-1">Saber más </p>
                            </button>
                        </div>
                    )}
                    {!isLargeScreen && (
                        <div className="col-6 d-flex justify-content-center">
                            <ButtonImage text='Contacto' icon='mail2'/>
                        </div>
                    )}
                    <div className="col d-flex  justify-content-center">
                        <span className="">
                            <ButtonImage text={isLargeScreen? 'Consulta rápida': 'Consulta'} icon="ws"/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}