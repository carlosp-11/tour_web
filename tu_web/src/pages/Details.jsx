import { HeaderComponent } from "../components/HeaderComponent";
import { SpinnerComponent } from "../components/SpinnerComponent";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../store/GlobalContext";
import ReactPlayer from 'react-player'
import { DetailsCard } from "../components/DetailsCard";
import { iconsEnum } from "../constants/amenitiesEnum";
import Placeholder from "../assets/svg/PropertyPlaceholder.svg";


export const Details =()=> {
    const {store, actions} = useContext(GlobalContext);
    const { id } = useParams();
    const [property, setProperty] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentPicture, setCurrentPicture] = useState(); 
    const searchIcon =(iconName)=>{
        const foundIcon = iconsEnum.find(icon => icon.name === iconName);
        if (foundIcon) {
            console.log('found', foundIcon.icon)
            return foundIcon.icon;
        } else {
            const defaultIcon = iconsEnum.find(icon => icon.name === "Otros");
            console.log('not found', defaultIcon);
            return defaultIcon ? defaultIcon.icon : null;
        }
    }
    
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

    useEffect(()=> {
        if (property.media){
            setCurrentPicture(property.media.find(pic => pic.order === 1));
            console.log(property.media);
        }
    },[property])

    return(
        <div>
            {isLoaded? (
                <div>
                    <div className="position-relative">
                        <HeaderComponent tag={property.transaction} isDetail={true} image={ currentPicture? currentPicture.url : Placeholder} />
                        <div className="position-absolute" style={{top: 260}}>
                        { 
                            property.media ? 
                              <div className="row d-flex ps-4">  
                                {property.media.slice(0, 3).map((item, index) => (
                                    <a role="button" className="col" key={index} onClick={()=>setCurrentPicture(item)} style={{height: '20rem'}}>
                                        <img className={`border ${currentPicture? currentPicture.url === item.url? 'border-success border-4 ': '': ''}`} src={item.url} alt={`Imagen ${index}`} style={{height: '7rem', width: '7rem'}} />
                                    </a>
                                ))} 
                                <a role="button" className="mx col" style={{height: '20rem'}}  data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <h6 className="bg-secondary d-flex flex-column justify-content-center raleway fw-light text-center" style={{height: '7rem', width: '7rem'}} > VER <br/> GALERÍA</h6>
                                </a>
                                </div>:
                                <SpinnerComponent/>
                        }
                           
                        </div>
                    </div>
                    <div className="position-relative d-flex mb-5">
                        <div className="col col-lg-6 col-xl-6 mx-auto">
                            <div className="d-lg-none px-4 pt-4 pb-5 mx-auto">
                                <DetailsCard property={property} />
                            </div>
                            <p className="col-12 raleway-bold fs-3 px-4 px-lg-0 px-xl-0">Descripción de la propiedad</p>
                            <p className="col-12 nunito px-4 px-lg-0 px-xl-0" style={{ whiteSpace: "pre-line" }}>
                                {property.description}
                            </p>
                            <p className="col-12 raleway-bold fs-3 px-4 px-lg-0 px-xl-0 pt-5">Video de la propiedad</p>
                            <div className="col-12 mx-auto px-4 px-lg-0 px-xl-0" style={{width: '100%', height:'30rem'}}>
                                <ReactPlayer url='https://youtu.be/rjUy0huDLso?si=WBOfa1THhSYZmUjX' light={true} width={'100%'}  height={'100%'}/>
                            </div>
                            <div className="pb-5 px-4"> 
                                <p className="col-12 raleway-bold fs-3 pt-5">Características destacadas</p>
                                {property.amenities.map((item, index)=>
                                    <p key={index} className="fs-5 raleway"> 
                                        <img src={searchIcon(item.name)} style={{height: '3rem'}}/>
                                        <span className="ps-2">{item.description} </span>
                                    </p>
                                )}
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
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog">
                    <div className="modal-content" >
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel"></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div id="carouselExample" className="carousel slide">
                                <div className="carousel-inner">
                                    { property.media? 
                                        (property.media.map((item, index)=>(
                                        <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                                            <img src={item.url} className="d-block w-100" alt="..."/>
                                        </div>
                                    ))) : <SpinnerComponent/> }
                                </div>
                                <button className="carousel-control-prev " type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon border border-3 rounded-circle p-4" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                    <span className="carousel-control-next-icon border border-3 rounded-circle p-4" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}