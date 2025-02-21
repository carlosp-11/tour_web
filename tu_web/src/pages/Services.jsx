import { HeaderComponent } from "../components/HeaderComponent";
import ServiceHeader from '../assets/headers/services-header.png';
import WorkingLaptop from '../assets/pictures/working-laptop.png';
import UnderConstruction from '../assets/pictures/under-construction.png';
import HouseKeys from '../assets/pictures/house-keys.png';
import HighBuildings from '../assets/pictures/high-buildings.png';
import ColonialTown from '../assets/pictures/colonial-town.png'; 
import { ButtonImage } from "../components/ButtonImage";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { WhatsAppButton } from "../components/WhatsAppButton";

export const Services = () => {
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
        <div className="">
            <HeaderComponent image={ServiceHeader} tag='Servicios'/>
            <div className="position-absolute p-0 m-0 g-0" style={{top: '63%', right: 0, width: 90, zIndex: 9, display: !isLargeScreen? 'none': ''}}>
                <WhatsAppButton/>
            </div>
            <div className="row mx-0 px-lg-5 px-4 py-5" id="asesoriaJumbotron">
                <div className="col text-center">
                    <img 
                        src={WorkingLaptop} 
                        alt="trabajando en la laptop"
                        className="rounded-4"
                        style={{minWidth: '20rem', height: 'auto', objectFit: 'cover', width:'100%', minHeight:'25rem'}}
                    />
                </div>
                <div className="col-12 col-lg-6 col-xl-6 px-lg-5">
                    <h6 className="tu-font nunito-light pt-5 pt-lg-0"> Asesoría </h6>
                    <h1 className="raleway-bold py-2"> Asesoría Experta para Cada Decisión </h1>
                    <p className="nunito"> Confía en nuestro equipo para obtener la orientación necesaria
                        en cada etapa. Desde la compra al alquiler, estamos contigo para ayudarte a tomar 
                        decisiones informadas.
                    </p>
                    <ul className="pb-5">
                        <li>Asesoramiento Personalizado</li>
                        <li>Asesoramiento Compra-Venta</li>
                    </ul>
                    <ButtonImage text={isLargeScreen? 'Consulta rápida': 'Consulta'} icon="ws"/>
                </div>
            </div>
            <div className="row mx-0 px-lg-5 px-4 py-5" id="gestionJumbotron">
                <div className="col-12 col-lg-6 col-xl-6 px-lg-5 order-last order-lg-first order-xl-first">
                    <h6 className="tu-font nunito-light pt-5 pt-lg-0"> Gestión </h6>
                    <h1 className="raleway-bold py-2"> Gestión que Simplifica Tu Vida </h1>
                    <p className="nunito"> Nos encargamos de las tareas administrativas y operativas para que disfrutes 
                        de tranquilidad total. Con nuestra experiencia, tu propiedad está en las mejores manos.
                    </p>
                    <ul className="pb-5">
                        <li>Gestión de Propiedades</li>
                        <li>Mantenimiento de Propiedades</li>
                        <li>Servicios de Reforma</li>
                    </ul>
                    <ButtonImage text='Solicitar Gestión' icon='none' someFunction={()=>navigate('/contacto')}/>
                </div>
                <div className="col text-center align-self-center">
                    <img 
                        src={UnderConstruction}
                        className="rounded-4" 
                        alt="trabajo en obras" 
                        style={{minWidth: '20rem', height: 'auto', objectFit: 'cover', width:'100%', minHeight:'25rem'}}
                    />
                </div>
            </div>
            <div className="row mx-0 px-lg-5 px-4 py-5" id="segurosJumbotron">
                <div className="col text-center">
                    <img 
                        src={HouseKeys}
                        className="rounded-4"
                        alt="llaves y contrato de vivienda" 
                        style={{minWidth: '20rem', height: 'auto', objectFit: 'cover', width:'100%', minHeight:'25rem'}}
                    />
                </div>
                <div className="col-12 col-lg-6 col-xl-6 px-lg-5">
                    <h6 className="tu-font nunito-light pt-5 pt-lg-0"> Seguros </h6>
                    <h1 className="raleway-bold py-2"> Protección y Tranquilidad Garantizadas </h1>
                    <p className="nunito"> Asegura lo que más valoras. Desde el hogar hasta la tranquilidad de 
                    los pagos, contamos con coberturas adaptadas a tus necesidades.
                    </p>
                    <ul className="pb-5">
                        <li>Seguros de hogar</li>
                        <li>Seguros Impagos</li>
                        <li>Seguros Mascotas</li>
                    </ul>
                    <ButtonImage text={isLargeScreen? 'Consultar Coberturas': 'Consultar'} icon="ws"/>
                </div>
            </div>
            <div className="row mx-0 px-lg-5 px-4 py-5 bg-secondary-subtle">
                <div className="col-12 col-lg-6 col-xl-6 px-lg-5 order-last order-lg-first order-xl-first flex-column justify-content-center d-flex">
                    <h6 className="tu-font nunito-light pt-5 pt-lg-0"> Compra </h6>
                    <h1 className="raleway-bold py-2"> Haz de Tenerife Tu Hogar Permanente </h1>
                    <p className="nunito"> Encuentra la propiedad ideal en Tenerife, ya sea para comenzar una
                        nueva etapa o como una inversión. Nuestro equipo te acompaña en cada paso del proceso,
                        desde la selección hasta la financiación.
                    </p>
                    <h5 className="raleway fw-bold pb-5"> Explora Propiedades a la Venta </h5>
                    <span>
                        <ButtonImage text='Ver Propiedades' icon='none'  someFunction={()=>navigate('/comprar')}/>
                    </span>
                </div>
                <div className="col text-center align-self-center">
                    <img 
                        src={ColonialTown} 
                        alt="trabajo en obras"
                        className="rounded-4" 
                        style={{minWidth: '20rem', height: 'auto', objectFit: 'cover', width:'100%', minHeight:'25rem'}}
                    />
                </div>
            </div>
            <div className="row mx-0 px-lg-5 px-4 py-5 bg-secondary-subtle">
                <div className="col text-center">
                    <img 
                        src={HighBuildings} 
                        alt="zona residencial"
                        className="rounded-4" 
                        style={{minWidth: '20rem', height: 'auto', objectFit: 'cover', width:'100%', minHeight:'25rem'}}
                    />
                </div>
                <div className="col-12 col-lg-6 col-xl-6 px-lg-5 flex-column d-flex justify-content-center">
                    <h6 className="tu-font nunito-light pt-5 pt-lg-0"> Venta </h6>
                    <h1 className="raleway-bold py-2"> Vende tu Propiedad sin Complicaciones </h1>
                    <p className="nunito"> Con nuestra experiencia y red estratégica, gestionamos la venta de tu 
                        propiedad de manera eficiente y transparente. Maximiza el valor de tu inmueble con 
                        nuestra asesoría.
                    </p>
                    <span className="row">
                        <span className="col">
                            <ButtonImage text={isLargeScreen? 'Conoce nuestro proceso de venta': 'Saber más'} icon="none-blue" someFunction={()=>navigate('/vender')}/>
                        </span>
                        <span className="col">
                            <ButtonImage text='Solicitar evaluación' icon="none"  someFunction={()=>navigate('/contacto')}/>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
}