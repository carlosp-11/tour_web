import { HeaderComponent } from "../components/HeaderComponent";
import AboutHeader from '../assets/headers/about-header.png';
import BlueHouse from '../assets/pictures/blue-house.png';
import CoupleBreakfast from '../assets/pictures/couple-breakfast.png';
import CoupleWalking from '../assets/pictures/couple-walking.png'
import { ButtonImage } from "../components/ButtonImage";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { WhatsAppButton } from "../components/WhatsAppButton";
import CEOPic from '../assets/pictures/ceo_3.jpg'

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
            <div className="position-absolute p-0 m-0 g-0" style={{top: '63%', right: 10, width: 90, zIndex: 9, display: !isLargeScreen? 'none': ''}}>
                <WhatsAppButton/>
            </div>
            <HeaderComponent image={AboutHeader} tag='Nosotros'/>
            <div className="row mx-0 px-lg-5 px-4 py-5">
                <div className="col-12 col-md-6 col-lg-6 col-xl-6 px-lg-5 order-last order-lg-first order-xl-first">
                    <h6 className="tu-font nunito-light pt-5 d-none d-md-block"> Quiénes somos</h6>
                    <h1 className="raleway-bold py-2 pt-3 pt-md-0 pt-lg-0 pt-xl-0">Crea Tu Hogar en Tenerife</h1>
                    <p className="nunito "> En Turismo URBANO S.L. ofrecemos una experiencia única de alquiler de inmuebles 
                        en la paradisiaca isla de Tenerife. Nuestra misión es conectar a turistas europeos, parejas que buscan un 
                        nuevo comienzo, y nómadas digitales con propiedades completamente amuebladas y equipadas para estadías 
                        temporales de 3 a 6 meses. Ya sea para disfrutar del invierno lejos del frío o para construir un futuro
                        en la isla, estamos aquí para brindarte el espacio que necesitas.
                    </p>
                </div>
                <div className="col order-2 pe-0 pe-lg-5 pe-xl-5" style={{}}>
                    <img 
                        src={BlueHouse}
                        className="rounded-4" 
                        alt="fotografía vivienda al sur de Tenerife" 
                        style={{height:'100%', objectFit: 'cover', width:'100%',  minHeight:'22rem'}}
                    />
                </div>
            </div>
            <div className="row mx-0 px-lg-5 px-4 py-5">
                <div className="col text-center">
                    <img 
                        src={CoupleBreakfast}
                        className="rounded-4"
                        alt="pareja desayunando en su nueva casa" 
                        style={{ objectFit: 'cover', width:'100%', height: '100%', minHeight:'22rem'}}
                    />
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-6 px-lg-5">
                    <h6 className="tu-font nunito-light pt-5 d-none d-md-block"> Nuestra Visión</h6>
                    <h1 className="raleway-bold py-2 pt-3 pt-md-0 pt-lg-0 pt-xl-0"> Espacios que Inspiran Nuevos Comienzos</h1>
                    <p className="nunito pb-5"> Creemos que cada inmueble es más que un espacio: es un punto de
                        partida para nuevas historias. En Turismo URBANO, trabajamos bajo principios de 
                        trasparencia, comodidad y confianza, asegurando una experiencia sin complicaciones
                        tanto para los propietarios como para los inquilinos. Nuestra cisión es liderar el 
                        mercado de alquileres temporales en Tenerife, ofreciendo soluciones personalizadas
                        que se adaptan a las necesidades de cada cliente.
                    </p>
                    <div className="col-lg-6 col-xl-6 col-auto">
                        <ButtonImage text={isLargeScreen? 'Consulta rápida': 'Consulta'} icon="ws"/>
                    </div>
                </div>
            </div>
            <div className="row mx-0 px-lg-5 px-4 py-5 bg-secondary-subtle">
                <div className="col-12 col-md-6 col-lg-5 col-xl-5 px-lg-5 order-last order-lg-first order-xl-first">
                    <h6 className="tu-font nunito-light pt-5 d-none d-md-block"> ¿Por qué elegirnos?</h6>
                    <h1 className="raleway-bold py-2 pt-3 pt-md-0 pt-lg-0 pt-xl-0">Confianza, Comodidad y Compromiso </h1>
                    <p className="nunito pb-5"> Elegir Turismo URBANO significa optar por una gestión profesional y 
                        eficiente, respaldada por contratos claros y renovables. Nuestro compromiso es con la calidad:
                        respetando el marco legal vigente y garantizamos una experienca confiable para propitarios e 
                        inquilinos. Con inmuebles ubicados estratégicamente en Valle San Lorenzo y Las Galletas, te 
                        ofrecemos comodidad y accesibilidad en cada detalle.
                    </p>
                    <ButtonImage text='Contacto' icon='mail2' someFunction={()=>navigate('/contacto')}/>
                </div>
                <div className="col order-2 pe-0 pe-lg-5 pe-xl-5">
                    <img 
                        src={CoupleWalking} 
                        className="rounded-4"
                        alt="pareja caminando a casa" 
                        style={{height:'100%', objectFit: 'cover', width:'100%', minHeight:'22rem'}}
                    />
                </div>
            </div>
            <div className="bg-secondary row mx-0 px-lg-5 px-4 py-5">
                <div className="col-12 col-lg-4  d-flex flex-column justify-content-around">
                    <div className="pb-3 pb-lg-5 pb-xl-5">
                        <h6 className="nunito-light pb-2 d-none d-lg-block">Detrás de tu comfort</h6>
                        <h2 className="raleway-bold fs-1 pb-lg-5 pt-3 pt-md-0 pt-lg-0 pt-xl-0"> Tu Tranquilidad, Nuestra Prioridad</h2>
                    </div>
                    <div className="pt-5 d-none d-lg-block">
                        <div className="row">
                            <div className="col-6">
                                <ButtonImage text='Contacto' icon='mail' someFunction={()=>navigate('/contacto')}/>
                            </div>
                            <div className="col-6">
                                <ButtonImage text='Consulta' icon="ws"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" col-12 col-md-6 col-lg-4 col-xl-4">
                    <img 
                        src={CEOPic} 
                        className="rounded-4"
                        alt="CEO" 
                        style={{height:'100%', objectFit: 'cover', width:'100%', maxHeight:'40rem', minHeight:'22rem'}}
                    />
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xl-4 pe-0 pe-lg-5 pe-xl-5 d-flex flex-column justify-content-evenly pt-3 pt-lg-0 pt-xl-0">
                    <div>
                        <h4 className="raleway-bold fs-3 pb-3">Yolanda Dorta Fortes</h4>
                        <h6 className="text-warning raleway-bold d-none d-md-block">CEO/ Gerente</h6>
                    </div>
                    <p className="raleway">Yolanda, CEO y asesora profesional de Turismo URBANO, lidera nuestra empresa con pasión y dedicación. 
                        Con un enfoque en la personalización, Yolanda asegura que cada cliente reciba atención individualizada
                        y soluciones adaptadas a sus necesidades. Ya sea que estés buscando alquilar o gestionar tu propiedad, 
                        su experiencia y compromiso hacen la diferencia. Porque detrás de cada contrato, está nuestro deseo de 
                        brindarte tranquilidad.
                    </p>
                </div>
                <div className="pt-5 px-lg-5 px-lg-5">
                    <div className="col-12 border-bottom border-white px-lg-5 px-lg-5"></div>
                </div>
            </div>
        </div>
    );
}