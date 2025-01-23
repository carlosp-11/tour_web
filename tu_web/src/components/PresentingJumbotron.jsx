import { PresentingCard } from "./PresentingCards";
import SellingPic from '../assets/pictures/selling-pic.png';
import LongStayPic from '../assets/pictures/long-stay-pic.png';
import ShortStayPic from '../assets/pictures/short-stay-pic.png';
import PurchasePic from '../assets/pictures/purchase-pic.png';

export const PresentingJumbotron =() => {
    return (
        <div className="row container-fluid px-4 mx-0 py-5 mb-5">
            <div className="col-12 text-center">
                <h2 className="raleway-bold">Encuentra Tu Espacio Perfecto</h2>
                <h6 className="tu-font nunito-light"> Descubre el apartamento ideal que se adapta a cada una de tus necesidades.</h6>
            </div>
            <span className="col-12 col-md-6 col-lg-3 d-flex justify-content-center my-3">
                <PresentingCard image={PurchasePic} text='Comprar'/>
            </span>
            <span className="col-12 col-md-6 col-lg-3 d-flex justify-content-center my-3">
                <PresentingCard image={ShortStayPic} text='Alquiler Corta temporada' secondText="Corta Temporada"/>
            </span>
            <span className="col-12 col-md-6 col-lg-3 d-flex justify-content-center my-3">
                <PresentingCard image={LongStayPic} text='Alquiler Larga Temporada' secondText="Larga Temporada"/>
            </span>
            <span className="col-12 col-md-6 col-lg-3 d-flex justify-content-center my-3">
                <PresentingCard image={SellingPic} text='Vender'/>
            </span>
        </div>
    );
}