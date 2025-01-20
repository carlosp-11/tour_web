import { PillsComponent } from "./PillsComponent";
import { PropertiesCarrousel } from "./PropertiesCarrousel";

export const PropertiesJumbotron =()=> {
    return (
        <div>
            <div className="row py-5">
                <h2 className="col-12 raleway-bold px-5">Propiedades destacadas</h2>
                <h6 className="col-12 nunito-light tu-font px-5 d-none d-lg-block">Viviendas amuebladas y acogedoras para estadías de corta y mediana duración.</h6>
                <div className="col-12 col-lg-9 px-3">
                    <PillsComponent/>
                </div>
                <div className="col-3 d-flex align-items-center order-4 order-md-4 order-lg-0 justify-content-lg-end">
                    <a href="#" className="nunito link-dark fw-bold">Ver todos los inmuebles</a>
                </div>
                <div className="row">
                        <div className="col-12">
                            <PropertiesCarrousel />
                        </div>
                </div>
            </div>
        </div>
    );
}