import { useEffect, useState } from "react";
import { ReviewCard } from "./ReviewCard";
import SwitchLeft from '../assets/icons/switch-left-arrow.png'
import SwitchRight from '../assets/icons/switch-right-arrow.png'

export const ReviewCarrousel = () => {

    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(1); // Estado para la diapositiva actual

    useEffect(() => {
        const carouselElement = document.querySelector("#carouselExampleAutoplaying");

        const handleSlideChange = (event) => {
            setCurrentSlide(event.to + 1); // Actualiza el estado con el índice de la nueva diapositiva
        };

        // Escucha el evento `slid.bs.carousel`
        carouselElement.addEventListener("slid.bs.carousel", handleSlideChange);

        // Limpieza del evento
        return () => {
            carouselElement.removeEventListener("slid.bs.carousel", handleSlideChange);
        };
    }, []);
    
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
        <div id="carouselExampleAutoplaying" className="carousel slide text-center row pb-5 d-flex justify-content-center" data-bs-ride="carousel" data-bs-interval="10000">
            <h1 className="col-12 pt-5 mt-lg-5" style={!isLargeScreen? {paddingBottom: "1.5rem"}: {}}> Calidad Ejemplar</h1>
            <h5 className="col-12 pt-2 pb-5" style={!isLargeScreen? {display:"none"}: {}} >¿Qué opinan nuestros clientes?</h5>
            <div className="order-md-2 col-6 col-lg-2 d-flex justify-content-end align-items-center order-2">
                <button className="btn btn-outline-secondary rounded-circle border-0" 
                    type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev"
                >
                    <img className="" src={SwitchLeft} alt="flecha izquierda" style={{height: "3rem"}}/>
                </button>
            </div>
            <div className="carousel-inner col-12 col-lg-8 order-1 order-md-1 order-lg-2 mb-4" style={isLargeScreen? {maxWidth: "60%"} : {}}>
                <div className="carousel-item active">
                    <ReviewCard number="first"/>
                </div>
                <div className="carousel-item">
                    <ReviewCard number="second"/>
                </div>
                <div className="carousel-item">
                    <ReviewCard number="third"/>
                </div>
            </div>
            <div className="order-md-2 col-6 col-lg-2 d-flex justify-content-start align-items-center order-2">
                <button className="btn btn-outline-secondary rounded-circle border-0" 
                    type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next"
                >
                    <img className="" src={SwitchRight} alt="flecha derecha" style={{height: "3rem"}}/>
                </button>
            </div>
            <p className="order-last py-2 fs-4" style={!isLargeScreen? {display:"none"}: {}}> {currentSlide}/3 </p>
        </div>
    );
}