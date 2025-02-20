import { PresentingCard } from "./PresentingCards";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SellingPic from '../assets/pictures/selling-pic.png';
import LongStayPic from '../assets/pictures/long-stay-pic.png';
import ShortStayPic from '../assets/pictures/short-stay-pic.png';
import PurchasePic from '../assets/pictures/purchase-pic.png';
import { WhatsAppButton } from "./WhatsAppButton";

export const PresentingJumbotron =() => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
        setTimeout(() => {
            window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        }, 10); // Pequeño delay para asegurarnos de que se ejecuta después del render
    };
    
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
        <div className="row container-fluid px-lg-5 px-4 mx-0 py-5">
            <div className="col-12 text-center">
                <div className="position-absolute p-0 m-0 g-0" style={{top: '63%', right: 0, width: 90, zIndex: 9, display: !isLargeScreen? 'none': ''}}>
                    <WhatsAppButton/>
                </div>
                <h2 className="raleway-bold fs-1">Encuentra Tu Espacio Perfecto</h2>
                <h6 className="tu-font nunito-light"> Descubre el apartamento ideal que se adapta a cada una de tus necesidades.</h6>
            </div>
            <span className={`col d-flex justify-content-evenly mt-3 px-0 mx-0 ${!isLargeScreen? 'row': ''}`}>
                <a className="col d-flex justify-content-center py-4" onClick={()=>navigate('/comprar')}>
                    <PresentingCard image={PurchasePic} text='Comprar'/>
                </a>
                <a className="col d-flex justify-content-center py-4" onClick={()=>navigate('/alquilar')}>
                    <PresentingCard image={ShortStayPic} text='Alquiler Corta temporada' secondText="Corta Temporada"/>
                </a>
            </span>
            <span className={`col d-flex justify-content-evenly mt-3 px-0 mx-0 ${!isLargeScreen? 'row': ''}`}>
                <a className="col d-flex justify-content-center py-4" onClick={()=>navigate('/alquilar')}>
                    <PresentingCard image={LongStayPic} text='Alquiler Larga Temporada' secondText="Larga Temporada"/>
                </a>
                <a className="col d-flex justify-content-center py-4" onClick={()=>handleNavigation('/vender')}>
                    <PresentingCard image={SellingPic} text='Vender'/>
                </a>
            </span>
        </div>
    );
}