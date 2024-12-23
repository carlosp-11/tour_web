import TuLogo from '../assets/logos/tu-logo.png';
import InvisibleLogo from '../assets/logos/invisible-tu-logo.png';
import NiceLivingroom from '../assets/pictures/beige-living-room.png';
import NiceSofa from '../assets/pictures/sofa-and-table.png';


export const FinalJumbotron = () => {
    return(
        <div className='py-5 w-100' style={{
            backgroundColor: "#efefef",
            backgroundImage: `url(${InvisibleLogo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            //height: "300px",
            //width: "100%",
        }}>
            <div className='d-flex justify-content-center row'>
               
                <div className='col-12 col-md-4 col-lg-4 px-5 my-lg-5'>
                    <h5>Sobre nosotros</h5>
                    <h2> Confianza y Atención Personalizada </h2>
                </div>
                <div className='col-12 col-md-4 col-lg-4 d-flex justify-content-center px-5 my-lg-5'>
                    <img src={NiceSofa} alt='foto de sofá y mesa de centro' style={{minWidth: "40%"}}/>
                </div>
                <div className='col-12 col-md-4 col-lg-4 d-flex justify-content-center px-5 my-lg-5 row'>
                    <img src={TuLogo} alt='foto de sofá y mesa de centro' className='' style={{ height: "12rem", width:"13rem"}}/>
                    <p> En Turismo URBANO nos dedicamos a ofrecer espacios cómodos y bien equipados para 
                        quienes buscan alquilar o comprar inmuebles en Tenerife. Nuestro compromiso es 
                        brindar un servicio personalizado, centrado en la satisfacción de nuestro clientes y 
                        ajustado a las necesidades de turistas, profesionales y nómadas digitales que desean 
                        disfrutar de las bondades de esta maravillosa isla
                    </p>
                </div>
            </div>
            <div className='d-flex justify-content-center row'>
                <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center px-5 my-lg-5">
                    <img src={NiceLivingroom} alt='fotografía de un salón de estar' style={{minWidth: "40%"}}/>
                </div>
                <div className='col-12 col-md-4 col-lg-4 my-lg-5'>
                    <h2> ¿Quieres vender tu propiedad en Tenerife?</h2>
                    <p> Lorem ipsum....</p>
                    <button type='button' className='btn btn-primary'>Saber más</button>
                </div>
            </div>
        </div>
    );
}