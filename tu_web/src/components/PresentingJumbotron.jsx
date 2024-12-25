import { PresentingCard } from "./PresentingCards";
import SellingPic from '../assets/pictures/selling-pic.png';
import LongStayPic from '../assets/pictures/long-stay-pic.png';
import ShortStayPic from '../assets/pictures/short-stay-pic.png';
import PurchasePic from '../assets/pictures/purchase-pic.png';

export const PresentingJumbotron =() => {
    return (
        <div className="row gx-4 mx-auto py-5 mb-5">
            <div className="col-12">
                <h2>Encuentra tu espacio perfecto</h2>
            </div>
            <span className="col-12 col-md-6 col-lg-3 d-flex justify-content-center my-3">
                <PresentingCard image={PurchasePic} text='Comprar'/>
            </span>
            <span className="col-12 col-md-6 col-lg-3 d-flex justify-content-center my-3">
                <PresentingCard image={ShortStayPic} text='Alquilar' secondText="Corta Temporada"/>
            </span>
            <span className="col-12 col-md-6 col-lg-3 d-flex justify-content-center my-3">
                <PresentingCard image={LongStayPic} text='Alquilar' secondText="Larga Temporada"/>
            </span>
            <span className="col-12 col-md-6 col-lg-3 d-flex justify-content-center my-3">
                <PresentingCard image={SellingPic} text='Vender'/>
            </span>
        </div>
    );
}