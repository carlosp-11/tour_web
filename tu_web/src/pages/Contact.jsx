import { HeaderComponent } from "../components/HeaderComponent";
import { ContactForm } from "../components/ContactForm";
import ContactHeader from '../assets/headers/contact-header.png';
import BlusSofaPic from '../assets/pictures/blue-sofa.png';
import { useEffect, useState } from "react";

export const Contact = () => {
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
        <div>
            <HeaderComponent image={ContactHeader} tag='Contacto' />
            <div className="row py-4 px-lg-5 px-4">
                <div className="col">
                    <img 
                        src={BlusSofaPic} 
                        alt="fotografía sofá azul" 
                        style={{minWidth: '23rem', height:'auto', objectFit: 'cover', width:'100%', minHeight:'25rem'}}
                    />
                </div>
                <div className="col-12 col-lg-6 col-xl-6 d-flex flex-column ps-lg-5">
                    <h6 className="tu-font nunito-light pt-5 pt-lg-0">En Turismo Urbano</h6>
                    <h1 className="raleway-bold"> Estamos para ayudarte </h1>
                    <p className="nunito fw-light"> Escríbenos y cuéntanos cómo podemos ayudarte. Nuestro equipo te responderá a la brevedad.</p>
                    <ContactForm changeColor={true}/>
                </div>
            </div>
            <div className="row px-4 py-5">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3519.863308076059!2d-16.65916362483931!3d28.08971210852405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6a996964a6a0a1%3A0x8d427baabe622e7b!2sTurismo%20Urbano%2C%20SL!5e0!3m2!1ses!2ses!4v1737910500240!5m2!1ses!2ses" 
                    width="600" height="450" style={{border:0}} allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade">    
                </iframe>
            </div>
        </div>
    )
}
