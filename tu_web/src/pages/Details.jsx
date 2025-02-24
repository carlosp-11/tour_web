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
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [currentPage, setIsCurrentPage] = useState(1);
    const [currentLength, setCurrentLength] = useState(0);
    const [currentVideo, setCurrentVideo] = useState(false);

    const calculatePage =(direction)=> {
        if (direction === 'next'){
            if (currentPage === currentLength){
                setIsCurrentPage(1);
            } else {
                setIsCurrentPage((prev)=> prev +1)
            }
        } 
        if (direction === 'prev') {
            if (currentPage === 1){
                setIsCurrentPage(currentLength);
            } else {
                setIsCurrentPage((prev)=> prev -1);
            }
        }
    }
    
    useEffect(() => {
           const handleResize = () => {
              // setIsLargeScreen(window.innerWidth >= 992); // Bootstrap 'lg' breakpoint (≥992px)
               setIsSmallScreen(window.innerWidth <= 768); // Bootstrap 'lg' breakpoint (≥992px)
           };
   
           // Inicializar y escuchar cambios en el tamaño de la ventana
           handleResize();
           window.addEventListener("resize", handleResize);
   
           // Limpieza del evento al desmontar
           return () => {
               window.removeEventListener("resize", handleResize);
           };
       }, []);

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
            setCurrentLength(store.currentProperty.media.length);
            setCurrentVideo(store.currentProperty.media.find(item => item.type === 'video'));
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
                            <div>
                                <div className="d-none d-lg-block">  
                                    <div className="row ps-4 ">  
                                        {property.media.slice(0, 3).map((item, index) => (
                                            <a role="button" className="col" key={index} onClick={()=>setCurrentPicture(item)} style={{height: '20rem'}}>
                                                <img className={`border ${currentPicture? currentPicture.url === item.url? 'border-success border-4 ': '': ''}`} src={item.url} alt={`Imagen ${index}`} style={{height: '7rem', width: '7rem'}} />
                                            </a>
                                        ))} 
                                        <a role="button" className="mx col text-decoration-none" style={{height: '20rem'}}  data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <h6 className="bg-secondary d-flex flex-column justify-content-center raleway fw-light text-center" style={{height: '7rem', width: '7rem'}} > VER <br/> GALERÍA</h6>
                                        </a>
                                    </div>
                                </div>
                            </div>:
                                <SpinnerComponent/>
                        }   
                        </div>
                        <div className="position-absolute opacity-75 d-block d-lg-none" style={{bottom: 60, width: '100%'}}> 
                            <a role="button" className="mx col text-decoration-none" style={{height: '20rem',}}  data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <h6 className="bg-secondary d-flex flex-column justify-content-center raleway fw-light text-center py-3 px-3" > VER GALERÍA</h6>
                            </a>
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
                            {currentVideo && ( <p className="col-12 raleway-bold fs-3 px-4 px-lg-0 px-xl-0 pt-5">Video de la propiedad</p>)}
                            {currentVideo && (
                                <div className="col-12 mx-auto px-4 px-lg-0 px-xl-0" style={{width: '100%', height:'30rem'}}>
                                <ReactPlayer url={currentVideo.url} light={true} width={'100%'}  height={'100%'}/>
                            </div>
                            )}
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
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content bg-dark" >
                        <div className="d-flex row justify-content-end px-4 pt-3">
                            <h6 className="text-center text-light raleway-bold pb-0 mb-0 fs-5 col align-self-center ps-5"> {currentPage} de {currentLength} </h6> 
                            <button type="button" className="btn-close fs-2 bg-white col-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" style={ !isSmallScreen?{height: '', display: 'flex', alignItems:'center', justifyContent: 'center', padding: 0}: {}}>
                            <div id="carouselExample" className="carousel slide">
                                <div className="carousel-inner" style={!isSmallScreen? {height: '', overflow: 'hidden', maxWidth: '70vw', margin: '0 auto'}: {}}>
                                    { property.media? 
                                        (property.media.map((item, index)=>(
                                        <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}> 
                                            <img src={item.url} className="d-block w-100 h-100 object-fit-cover" alt={`imagen ${index}`}  style={!isSmallScreen? {height: '80vh', width:'auto', objectFit: 'contain'}: {}}/>
                                        </div>
                                    ))) : <SpinnerComponent/> }
                                </div>
                            </div>
                            <div className="d-none d-md-block">
                                <button className="carousel-control-prev " type="button" data-bs-target="#carouselExample" data-bs-slide="prev" onClick={()=>calculatePage('prev')}>
                                    <span className="carousel-control-prev-icon border border-3 rounded-circle p-4 bg-dark" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" onClick={()=>calculatePage('next')}>
                                    <span className="carousel-control-next-icon border border-3 rounded-circle p-4 bg-dark" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className="d-md-none row d-flex">
                                <button className="carousel-control-prev " type="button" data-bs-target="#carouselExample" data-bs-slide="prev" onClick={()=>calculatePage('prev')}>
                                    <span className="carousel-control-prev-icon border border-3 rounded-circle p-4 bg-dark" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" onClick={()=>calculatePage('next')}>
                                    <span className="carousel-control-next-icon border border-3 rounded-circle p-4 bg-dark" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className=""> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}