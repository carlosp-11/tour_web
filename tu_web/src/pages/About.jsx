import { HeaderComponent } from "../components/HeaderComponent";
import AboutHeader from '../assets/headers/about-header.png';
import BlueHouse from '../assets/pictures/blue-house.png';
import CoupleBreakfast from '../assets/pictures/couple-breakfast.png';
import CoupleWalking from '../assets/pictures/couple-walking.png'
import { ButtonImage } from "../components/ButtonImage";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const About = () => {
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

    return(
        <div>
            <HeaderComponent image={AboutHeader} tag='Nosotros'/>
            <div className="row mx-0 px-lg-5 px-4 py-5">
                <div className="col-12 col-lg-6 col-xl-6 px-lg-5 order-last order-lg-first order-xl-first">
                    <h6 className="tu-font nunito-light pt-5"> Quiénes somos</h6>
                    <h1 className="raleway-bold py-2">Crea Tu Hogar en Tenerife</h1>
                    <p className="nunito "> En Turismo URBANO S.L. ofrecemos una experiencia única de alquiler de inmuebles 
                        en la paradisiaca isla de Tenerife. Nuestra misión es conectar a turistas europeos, parejas que buscan un 
                        nuevo comienzo, y nómadas digitales con propiedades completamente amuebladas y equipadas para estadías 
                        temporales de 3 a 6 meses. Ya sea para disfrutar del invierno lejos del frío o para construir un futuro
                        en la isla, estamos aquí para brindarte el espacio que necesitas.
                    </p>
                </div>
                <div className="col order-2">
                    <img 
                        src={BlueHouse} 
                        alt="fotografía vivienda al sur de Tenerife" 
                        style={{minWidth: '23rem', height:'auto', objectFit: 'cover', width:'100%', minHeight:'25rem'}}
                    />
                </div>
            </div>
            <div className="row mx-0 px-lg-5 px-4 py-5">
                <div className="col text-center">
                    <img 
                        src={CoupleBreakfast} 
                        alt="pareja desayunando en su nueva casa" 
                        style={{minWidth: '23rem', maxHeight:'32rem', objectFit: 'cover', width:'auto',}}
                    />
                </div>
                <div className="col-12 col-lg-6 col-xl-6 px-lg-5">
                    <h6 className="tu-font nunito-light pt-5"> Nuestra Visión</h6>
                    <h1 className="raleway-bold py-2"> Espacios que Inspiran Nuevos Comienzos</h1>
                    <p className="nunito pb-5"> Creemos que cada inmueble es más que un espacio: es un punto de
                        partida para nuevas historias. En Turismo URBANO, trabajamos bajo principios de 
                        trasparencia, comodidad y confianza, asegurando una experiencia sin complicaciones
                        tanto para los propietarios como para los inquilinos. Nuestra cisión es liderar el 
                        mercado de alquileres temporales en Tenerife, ofreciendo soluciones personalizadas
                        que se adaptan a las necesidades de cada cliente.
                    </p>
                    <ButtonImage text={isLargeScreen? 'Consulta rápida': 'Consulta'} icon="ws"/>
                </div>
            </div>
            <div className="row mx-0 px-lg-5 px-4 py-5 bg-secondary-subtle">
            <div className="col-12 col-lg-5 col-xl-5 px-lg-5 order-last order-lg-first order-xl-first">
                    <h6 className="tu-font nunito-light pt-5"> ¿Por Qué elegirnos?</h6>
                    <h1 className="raleway-bold py-2">Confianza, Comodidad y Compromiso </h1>
                    <p className="nunito pb-5"> Elegir Turismo URBANO significa optar por una gestión profesional y 
                        eficiente, respaldada por contratos claros y renovables. Nuestro compromiso es con la calidad:
                        respetando el marco legal vigente y garantizamos una experienca confiable para propitarios e 
                        inquilinos. Con inmuebles ubicados estratégicamente en Valle San Lorenzo y Las Galletas, te 
                        ofrecemos comodidad y accesibilidad en cada detalle.
                    </p>
                    <ButtonImage text='Contacto' icon='mail2' someFunction={()=>navigate('/contacto')}/>
                </div>
                <div className="col order-2">
                    <img 
                        src={CoupleWalking} 
                        alt="pareja caminando a casa" 
                        style={{minWidth: '23rem', height:'auto', objectFit: 'cover', width:'100%', minHeight:'25rem'}}
                    />
                </div>
            </div>
        </div>
    );
}