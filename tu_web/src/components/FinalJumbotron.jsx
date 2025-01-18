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
            <div className='d-flex justify-content-center align-items-center row'>
               
                <div className='col-12 col-md-4 col-lg-4 px-5 my-lg-5'>
                    <h5 className='tu-font nunito-light'>Sobre nosotros</h5>
                    <h2 className='raleway-bold'> Confianza y Atención Personalizada </h2>
                    <button type='button' className='btn btn-primary fw-light'>Conoce más sobre nosotros</button>

                </div>
                <div className='col-12 col-md-4 col-lg-4 d-flex justify-content-center px-5 my-lg-5'>
                    <img src={NiceSofa} alt='foto de sofá y mesa de centro' style={{width: "auto", height: '22rem',}}/>
                </div>
                <div className='col-12 col-md-4 col-lg-4 d-flex justify-content-center px-5 my-lg-5 row'>
                    <img src={TuLogo} alt='foto de sofá y mesa de centro' className='' style={{ height: "12rem", width:"auto"}}/>
                    <p> En Turismo URBANO nos dedicamos a ofrecer espacios cómodos y bien equipados para 
                        quienes buscan alquilar o comprar inmuebles en Tenerife. Nuestro compromiso es 
                        brindar un servicio personalizado, centrado en la satisfacción de nuestro clientes y 
                        ajustado a las necesidades de turistas, profesionales y nómadas digitales que desean 
                        disfrutar de las bondades de esta maravillosa isla.
                    </p>
                </div>
            </div>
            <div className='d-flex justify-content-center row'>
                <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center px-5 my-lg-5">
                    <img src={NiceLivingroom} alt='fotografía de un salón de estar' style={{minWidth: "40%"}}/>
                </div>
                <div className='col-12 col-md-4 col-lg-4 my-lg-5'>
                    <h2 className='raleway-bold'> ¿Quieres vender tu propiedad en Tenerife?</h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat lacus a 
                        purus rhoncus pellentesque eu nec mauris. Maecenas at lacus nunc. Quisque pellentesque 
                        metus dui, in blandit nisl pulvinar quis. Sed eget erat rhoncus, commodo dui sit amet, 
                        sagittis arcu.
                    </p>
                    <button type='button' className='btn btn-primary fw-light'>Saber más</button>
                </div>
            </div>
        </div>
    );
}