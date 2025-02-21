import { HeaderComponent } from "../components/HeaderComponent";
import { SpinnerComponent } from "../components/SpinnerComponent";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../store/GlobalContext";
import ReactPlayer from 'react-player'
import { DetailsCard } from "../components/DetailsCard";
//import Placeholder from "../assets/logos/tu-logo.png";
import Placeholder from "../assets/svg/PropertyPlaceholder.svg";


export const Details =()=> {
    const {store, actions} = useContext(GlobalContext);
    const { id } = useParams();
    const [property, setProperty] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(()=> {
        actions.getPropertyDetails(id);
    },[id])
    
    useEffect(()=> {
        if (store.currentProperty && Object.keys(store.currentProperty).length > 0) {
            setProperty(store.currentProperty);
            console.log('cargamos', store.currentProperty);
            console.log('???', property);
            setIsLoaded(true);
        }
    },[store.currentProperty])
    return(
        <div>
            {isLoaded? (
                <div>
                    <div className="">
                        <HeaderComponent tag={property.transaction} isDetail={true} image={property.media[0]?.url|| Placeholder} />
                    </div>
                    <div className="position-relative d-flex mb-5">
                        <div className="col col-lg-6 col-xl-6 mx-auto">
                            <p className="col-12 raleway-bold fs-3 px-4 px-lg-0 px-xl-0">Descripción de la propiedad</p>
                            <p className="col-12 nunito px-4 px-lg-0 px-xl-0" style={{ whiteSpace: "pre-line" }}>
                                {property.description}
                            </p>
                            <p className="col-12 raleway-bold fs-3 px-4 px-lg-0 px-xl-0 pt-5">Video de la propiedad</p>
                            <div className="col-12 mx-auto px-4 px-lg-0 px-xl-0" style={{width: '100%', height:'30rem'}}>
                                <ReactPlayer url='https://youtu.be/rjUy0huDLso?si=WBOfa1THhSYZmUjX' light={true} width={'100%'}  height={'100%'}/>
                            </div>
                            <p className="col-12 raleway-bold fs-3 px-4 px-lg-0 px-xl-0 pt-5">Características destacadas</p>
                            <div className="d-lg-none px-4">
                                <DetailsCard property={property} />
                            </div>
                        </div>
                        <div className="sticky-top top-0 mx-auto d-none d-lg-block" style={{width: '40%', height: '20%' }}>
                            <DetailsCard property={property} />
                        </div>
                    </div>
                </div>
                ): 
                ( <SpinnerComponent />)
            }
        </div>
    )
}