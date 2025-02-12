import { HeaderComponent } from "../components/HeaderComponent";
import RentingHeader from '../assets/headers/renting-header.png';


export const Renting = () => {
    return(
        <div>
            <HeaderComponent image={RentingHeader} tag='Alquilar'/>
        </div>
    )
}