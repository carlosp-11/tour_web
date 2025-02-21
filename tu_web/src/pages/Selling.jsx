import { useEffect, useState } from "react";
import { HeaderComponent } from "../components/HeaderComponent";
import SellingHeader from '../assets/headers/selling-header.png';
import GivingKeys from '../assets/pictures/giving-keys.png'
import AttendingPhone from '../assets/pictures/attending-phone.png'
import { ButtonImage } from "../components/ButtonImage";
import { useNavigate } from "react-router-dom";


export const Selling = () => {
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
    return (
        <div>
            <HeaderComponent image={SellingHeader} tag='Vender'/>
            <div className="d-flex flex-column align-items-center text-center px-5">
                <h1 className="raleway-bold py-2 col-12 col-lg-6 col-xl-6"> Vende tu Propiedad en Tenerife con Turismo URBANO </h1>
                <p className=" col-12 col-lg-6 col-xl-6 text-center"> Confia en nuestra experiencia para gestionar la venta de tu propiead de 
                    forma ágil y profesional. desde la valoración inicia hasta la firma final, estamos 
                    contigo en cada paso para maximizar el valor de tu inmueble 
                </p>
            </div>
            <div className="row mx-0 px-lg-5 px-4 py-5">
                <div className="col-12 col-lg-7 col-xl-7 px-lg-5 order-last order-lg-first order-xl-first">
                    <h6 className="tu-font nunito-light pt-5 pt-lg-0"> ¿Cómo Funciona Nuestro Proceso de Venta? </h6>
                    <h1 className="raleway-bold py-2"> Sigue el paso a paso para vender tu propiedad con éxito </h1>
                    <div className="row mx-0 px-0 gx-0">
                        <div className="row col-12 col-md-6 col-lg-6 col-xl-6 mx-0 pe-2 gx-0">
                           <div className="row col-12 align-items-center  mx-0 px-0">
                                <h1 className="raleway-bold tu-bigger-font col-2" style={{fontSize: 50}}>1</h1>
                                <p className="col raleway fw-bolder"> Valoración inicial gratuita:</p>
                                <p className="col-12"> Analizamos tu propiedad para determinar su valor de mercado</p>
                            </div>
                        </div>
                        <div className="row col-12 col-md-6 col-lg-6 col-xl-6 mx-0 pe-2 gx-0">
                           <div className="row col-12 align-items-center">
                                <h1 className="raleway-bold tu-bigger-font col-2" style={{fontSize: 50}}>2</h1>
                                <p className="col-10 raleway fw-bolder"> Promoción estratégica:</p>
                                <p className="col-12"> Fotografía profesional, publicidad digital y más</p>
                            </div>
                        </div>
                        <div className="row col-12 col-md-6 col-lg-6 col-xl-6 mx-0 pe-2 gx-0">
                           <div className="row col-12 align-items-center">
                                <h1 className="raleway-bold tu-bigger-font col-2" style={{fontSize: 50}}>3</h1>
                                <p className="col-10 raleway fw-bolder"> Gestión de visitas:</p>
                                <p className="col-12"> Organizamos y acompañamos a potenciales compradores</p>
                            </div>
                        </div>
                        <div className="row col-12 col-md-6 col-lg-6 col-xl-6 mx-0 pe-2 gx-0">
                           <div className="row col-12 align-items-center">
                                <h1 className="raleway-bold tu-bigger-font col-2" style={{fontSize: 50}}>4</h1>
                                <p className="col-10 raleway fw-bolder"> Cierre de la venta:</p>
                                <p className="col-12"> Negociación y formalización legal de la transacción</p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-5 ">
                        <ButtonImage text={isLargeScreen? 'Solicitar Evaluación': 'Evaluación'} icon="none" someFunction={()=>navigate('/contacto')}/>
                    </div>
                </div>
                <div className="col text-center mx-0 px-0 gx-0">
                    <img 
                        src={GivingKeys} 
                        alt="trabajando en la laptop" 
                        style={{minWidth: '23rem', height: 'auto', objectFit: 'cover', width:'100%', minHeight:'25rem'}}
                    />
                </div>
            </div>
            <div className="row mx-0 px-lg-5 px-4 py-5">
                <div className="col text-center">
                    <img 
                        src={AttendingPhone} 
                        alt="trabajando en la laptop" 
                        style={{minWidth: '23rem', height: 'auto', objectFit: 'cover', width:'100%', minHeight:'25rem'}}
                    />
                </div>
                <div className="col-12 col-lg-6 col-xl-6 px-lg-5">
                    <h6 className="tu-font nunito-light pt-5 pt-lg-0"> ¿Por qué elegirnos para vender tu inmueble? </h6>
                    <h1 className="raleway-bold py-2"> Beneficios de vender con Turismo URBANO </h1>
                    <p className="nunito"> Descubre las ventajas de confiar en una agencia local que entiende las necesidades de los propietarios en Tenerife.
                    </p>
                    <ul className="pb-5" style={{listStyle:"none"}}>
                        <li className="d-flex align-items-center">
                            <div className="bg-secondary rounded me-1" style={{width: 10, height: 10,}}/>
                            Experiencia en el mercado laboral 
                        </li>
                        <li className="d-flex align-items-center">
                            <div className="bg-secondary rounded me-1" style={{width: 10, height: 10,}}/>
                            Red de compradores activos
                        </li>
                        <li className="d-flex align-items-center">
                            <div className="bg-secondary rounded me-1" style={{width: 10, height: 10,}}/>
                            Trasparencia y legalidad
                        </li>
                        <li className="d-flex align-items-center">
                            <div className="bg-secondary rounded me-1" style={{width: 10, height: 10,}}/>
                            Soporte integral
                        </li>
                    </ul>
                    <ButtonImage text={isLargeScreen? 'Consulta rápida': 'Consulta'} icon="ws"/>
                </div>
            </div>
        </div>
    )
}