import { PillsComponent } from "./PillsComponent";
import { PropertiesCarrousel } from "./PropertiesCarrousel";
import { SmallPropertiesDisplay } from "./SmallPropertiesDisplay";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const PropertiesJumbotron =()=> {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const navigate = useNavigate();
    
     useEffect(() => {
    const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 576); // Bootstrap 'lg' breakpoint (≥992px)
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
        <div className="row py-5 w-100 px-0 mx-0 container-flex d-flex justify-content-center">
            <h2 className="col-12 raleway-bold fs-1 px-4 px-lg-5 px-md-5 px-xl-5">Inmuebles destacados</h2>
            <h6 className="col-12 nunito-light tu-font d-none d-lg-block px-4 px-lg-5 px-md-5 px-xl-5">Viviendas amuebladas y acogedoras para estadías de corta y mediana duración.</h6>
            <div className="col px-4 px-lg-5 px-md-5 px-xl-5">
                <PillsComponent/>
            </div>
            <div className="col-auto d-flex align-items-center order-4 order-md-4 order-lg-0 py-4 pe-5">
                <a type="button" onClick={()=> navigate('/alquilar')} className="nunito link-dark fw-bold row">
                    <h6 className="col align-self-center text-decoration-none"> Ver todos los inmuebles </h6>
                    <span className="arrow-circle col-auto p-0 m-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            className="circle-arrow"
                        >
                            <g id="Grupo_372917" data-name="Grupo 372917">
                            <circle
                                id="Elipse_1"
                                data-name="Elipse 1"
                                cx="18"
                                cy="18"
                                r="18"
                                fill="#eef2f2"
                                className="circle-background"
                            />
                            <path
                                id="arrow-right-solid"
                                d="M14.832,7.008a1.046,1.046,0,0,0,0-1.479L9.608.306A1.046,1.046,0,0,0,8.13,1.785l3.444,3.441H2.85C2.272,5.226,1.8,6.271,1.8,6.271S2.272,7.315,2.85,7.315H11.57L8.133,10.756a1.046,1.046,0,1,0,1.479,1.479l5.223-5.223Z"
                                transform="translate(10 11.73)"
                                fill="#000"
                            />
                            </g>
                        </svg>
                    </span>    
                </a>
            </div>
            <div className="row col-12">
                {!isSmallScreen && (<PropertiesCarrousel />)}
                {isSmallScreen && (<SmallPropertiesDisplay />)}
            </div>
        </div>
    );
}