import { useEffect, useState, useContext, useRef } from "react";
import { GlobalContext } from "../store/GlobalContext.jsx";
import { HeaderComponent } from "../components/HeaderComponent";
import { AdvancedSearchbar } from "../components/AdvancedSearchbar";
import { SpinnerComponent } from "../components/SpinnerComponent.jsx";
import { PaginationComponent } from "../components/PaginationComponent.jsx";
import RentingHeader from '../assets/headers/renting-header.png';


export const Renting = () => {
    const { store, actions } = useContext(GlobalContext);
       const [isSmallScreen, setIsSmallScreen] = useState(false);
       const [isPropertiesLoaded, setIsPropertiesLoaded] = useState(false);
       const [searchbarHeight, setSearchbarHeight] = useState(0);
       const [filteredProperties, setFilteredProperties] = useState([]);
       const searchbarRef = useRef(null);
           
       useEffect(() => {
           const handleResize = () => {
               setIsSmallScreen(window.innerWidth <= 576);
           };
       
           // Inicializar y escuchar cambios en el tamaño de la ventana
           handleResize();
           window.addEventListener("resize", handleResize);
       
           // Limpieza del evento al desmontar
           return () => {
               window.removeEventListener("resize", handleResize);
           };
       }, []);
   
       useEffect(()=>{
           if(store.filterRentalProperties.length > 0) {
               setFilteredProperties([...store.filterRentalProperties]);
               setIsPropertiesLoaded(true);
               console.log('obtenemos del contexto:',store.filterRentalProperties);
               console.log('for sale',filteredProperties);
           } else  {
               setFilteredProperties([]); // 
               setIsPropertiesLoaded(false);
           }
       }, [store.filterRentalProperties])
   
       useEffect(() => {
           if (searchbarRef.current) {
               const observer = new ResizeObserver(entries => {
                   for (let entry of entries) {
                       setSearchbarHeight(entry.contentRect.height);
                   }
               });
               observer.observe(searchbarRef.current);
               return () => observer.disconnect();
           }
       }, []);
   
       return(
           <div className="position-relative">
               <div className="" style={{}}>
                   <HeaderComponent image={RentingHeader} tag='Alquilar'/>
               </div>
               <div 
                   className={`shadow rounded-2 mx-4 mx-lg-auto mx-md-auto mx-sm-auto position-absolute ${isSmallScreen? '':'w-75'} `}
                   ref={searchbarRef} 
                   style={{
                       top: 160, 
                       right: !isSmallScreen? '12.5%': ''
                   }}
               >
                   <AdvancedSearchbar transaction={'alquilar'}/>
               </div>
               <div className="w-75 mx-4 mx-md-auto mx-sm-auto" style={{ height: searchbarHeight-70 }}></div>
               <div className="pt-5 pt-lg-0 pt-xl-0" style={{marginTop: !isSmallScreen? '': ''}}>
                   <div className="row px-5">
                       <div className="row col-12 g-0">
                           <p className="col-12 col-md col-lg col-xl raleway-bold fs-3 align-self-start">
                               Explora Nuestras Propiedades a la Venta
                           </p>
                           <div className="col-auto"> 
                               <p className="col-auto text-end raleway pt-0 pt-md-3 pt-lg-3 pt-xl-3">
                                   <span className="fw-bold">Resultados: </span> 
                                   {isPropertiesLoaded && !filteredProperties[0].message? store.filterRentalProperties.length : '0'} 
                                   {' '}propiedades 
                               </p>
                               <div className="col-auto align-self-start">
                                   <div class="dropdown">
                                       <button 
                                           class="btn form-select raleway fs-6" 
                                           type="button" 
                                           data-bs-toggle="dropdown" 
                                           aria-expanded="false"
                                       >
                                           Ordenar por
                                       </button>
                                       <ul class="dropdown-menu">
                                           <li>
                                               <a 
                                                   class="dropdown-item" 
                                                   role="button" 
                                                   onClick={()=> actions.useFilters({set: 'alquiler', type: 'order', criteria:'des'})}
                                               >
                                                   Precio más bajo
                                               </a>
                                           </li>
                                           <li>
                                               <a 
                                                   class="dropdown-item" 
                                                   role="button" 
                                                   onClick={()=> actions.useFilters({set: 'alquiler', type: 'order', criteria:'asc'})}
                                               >
                                                   Precio más alto
                                               </a>
                                           </li>
                                       </ul>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="pt-5">
                       {isPropertiesLoaded? 
                           (filteredProperties[0].message? 
                               <p className="raleway text-center fs-3" style={{marginTop: 100, marginBottom: 300}}> 
                                   NO HAY RESULTADOS <br/> <span className=" fs-5"> Restaura los filtros y vuelve a intentar </span>
                               </p> : 
                               <PaginationComponent properties={filteredProperties} />
                           ):
                           (<SpinnerComponent/>)
                       }
                   </div>
               </div>
           </div>
       )
   }
   