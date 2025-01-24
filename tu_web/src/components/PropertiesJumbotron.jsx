import { PillsComponent } from "./PillsComponent";
import { PropertiesCarrousel } from "./PropertiesCarrousel";
import { SmallPropertiesDisplay } from "./SmallPropertiesDisplay";
import { useEffect, useState } from "react";

export const PropertiesJumbotron =()=> {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    
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
        <div className="row py-5 w-100 px-5 mx-0 container-flex d-flex justify-content-center">
            <h2 className="col-12 raleway-bold fs-1 px-0">Inmuebles destacados</h2>
            <h6 className="col-12 nunito-light tu-font d-none d-lg-block">Viviendas amuebladas y acogedoras para estadías de corta y mediana duración.</h6>
            <div className="col-12 col-lg-9 px-3">
                <PillsComponent/>
            </div>
            <div className="col-12 col-lg-3 d-flex align-items-center order-4 order-md-4 order-lg-0 justify-content-lg-end justify-content-center py-4">
                <a href="#" className="nunito link-dark fw-bold">Ver todos los inmuebles</a>
            </div>
            <div className="row col-12">
                {!isSmallScreen && (<PropertiesCarrousel />)}
                {isSmallScreen && (<SmallPropertiesDisplay />)}
            </div>
        </div>
    );
}