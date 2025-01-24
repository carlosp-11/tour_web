import { ReviewCarrousel } from "./ReviewCarrousel";
import { useEffect, useState } from "react";

export const ReviewJumbotron = () =>{
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

    return(
        <div className="px-5 mx-0 py-5 container-fluid d-flex justify-content-center align-items-center row">
            <h1 className="col-12 mt-lg-5 raleway-bold" style={!isLargeScreen? {paddingBottom: "1.5rem"}: {}}> Calidad Ejemplar</h1>
            <h5 className="col-12 pt-2 pb-5 tu-font nunito-light" style={!isLargeScreen? {display:"none"}: {}} >¿Qué opinan nuestros clientes?</h5>
            <div className="col-12">
                <ReviewCarrousel />
            </div>
        </div>
    );
}