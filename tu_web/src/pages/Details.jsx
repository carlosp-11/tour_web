import { HeaderComponent } from "../components/HeaderComponent";
import { SpinnerComponent } from "../components/SpinnerComponent";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../store/GlobalContext";
import ReactPlayer from 'react-player'

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
                        <HeaderComponent tag={property.transaction} isDetail={true} image={property.media[0].url|| ''} />
                    </div>
                    <div className="position-relative d-flex mb-5">
                        <div className=" col col-lg-6 col-xl-6 mx-auto">
                            <p className="raleway-bold fs-3 px-4 px-lg-0 px-xl-0">Descripción de la propiedad</p>
                            <p className="nunito px-4 px-lg-0 px-xl-0" style={{ whiteSpace: "pre-line" }}>
                                {property.description}
                            </p>
                            {/* <ReactPlayer url='https://youtu.be/rjUy0huDLso?si=WBOfa1THhSYZmUjX' /> */}
                            <video loop autoPlay muted>
                              <source src="https://youtu.be/rjUy0huDLso?si=WBOfa1THhSYZmUjX" type="video/mp4" />
                            </video>
                        </div>
                        <div className="card sticky-top top-0 mx-auto rounded-4 shadow" style={{width: '40%', height: '20%' }}>
                            <div className="card-body">
                                <p className="raleway-bold fs-2 my-0">{property.name}</p>
                                <p className="tu-secondary raleway fs-5 mb-2 text-uppercase pb-3">{property.town.name}</p>
                                <p className="fs-1 raleway-bold"> € {property.price} </p>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                        </div>
                    </div>
                </div>
                ): 
                ( <SpinnerComponent />)
            }
        </div>
    )
}