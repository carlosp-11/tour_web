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
        <div className="row py-5 w-100 px-0 mx-0 container-flex d-flex justify-content-center">
            <h2 className="col-12 raleway-bold fs-1 px-4 px-lg-5 px-md-5 px-xl-5">Inmuebles destacados</h2>
            <h6 className="col-12 nunito-light tu-font d-none d-lg-block px-4 px-lg-5 px-md-5 px-xl-5">Viviendas amuebladas y acogedoras para estadías de corta y mediana duración.</h6>
            <div className="col-12 px-4 px-lg-5 px-md-5 px-xl-5">
                <PillsComponent/>
            </div>
            <div className="row col-12">
                {!isSmallScreen && (<PropertiesCarrousel />)}
                {isSmallScreen && (<SmallPropertiesDisplay />)}
            </div>
        </div>
    );
}