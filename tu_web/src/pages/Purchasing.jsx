import { HeaderComponent } from "../components/HeaderComponent";
import { PillsComponent } from "../components/PillsComponent";
import PurchasingHeader from '../assets/headers/purchasing-header.png';
import { PropertiesCarrousel } from "../components/PropertiesCarrousel";
import { SmallPropertiesDisplay } from "../components/SmallPropertiesDisplay";
import { SimpleSearchbar } from "../components/SimpleSearchbar";
import { useEffect, useState } from "react";


export const Purchasing = () => {
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

    return(
        <div>
            <HeaderComponent image={PurchasingHeader} tag='Comprar'/>
            <SimpleSearchbar/>
            <div>
                <PillsComponent/>
                <div className="row col-12">
                    {!isSmallScreen && (<PropertiesCarrousel />)}
                    {isSmallScreen && (<SmallPropertiesDisplay />)}
                </div>
            </div>
        </div>
    )
}