import { ButtonImage } from "./ButtonImage";
import ServicesPic from '../assets/pictures/services-pic.png';

export const ServicesJumbotron = () => {
    return (
        <div className="bg-dark-subtle  py-5">
            <div className="d-flex justify-content-center row">
                <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center px-5 my-lg-5">
                    <img src={ServicesPic} alt="Servicios" className="px-2" style={{minWidth: "40%"}}/>
                </div>
                <div className="col-12 col-md6 col-lg-6 d-flex justify-content-center my-3 px-5 my-lg-5 row">
                    <div className="col-12">
                        <h2>Servicios Personalizados para Compradores, Inquilinos y Propietarios</h2>
                        <h5 className="d-none d-lg-block py-2">Gestionamos propiedades, asesoramos en compra-venta, y ofrecemos mantenimiento completo.</h5>
                        <p className=" pb-5 pt-3 pt-lg-1 pb-lg-4"> 
                            Sed purus ex, dapibus condimentum facilisis a, ullamcorper sed augue. Ut augue velit, vehicula sed justo vitae, condimentum consectetur magna. Proin quis molestie sapien, nec eleifend dui. Nulla elementum feugiat blandit. Vestibulum nec lectus dignissim leo bibendum lobortis. Praesent gravida metus at libero porttitor luctus. Cras a eros vitae odio ornare malesuada a eget risus. Duis sed dolor scelerisque, fermentum nunc sed, molestie est. Aenean ornare nunc et diam commodo hendrerit.
                            In interdum, neque ut commodo cursus, metus ante iaculis urna, fringilla dictum enim nibh non massa. Mauris sit amet cursus nisl. In bibendum ac dui nec hendrerit. Nam sed. 
                        </p>
                    </div>
                    <div className="col-12">
                        <button type="button" className="btn btn-secondary me-3">Saber más</button>
                        <ButtonImage text="Consulta rápida" icon="whatsapp"/>
                    </div>
                </div>
            </div>
        </div>
    );
}