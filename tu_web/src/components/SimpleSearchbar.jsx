import { ButtonImage } from "./ButtonImage";
import Scope from "../assets/svg/scope.svg";
import { useEffect, useState } from "react";
import '../styles/SimpleSearchbar.css'

export const SimpleSearchbar = () => {

    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const SearchResults =()=>{
        console.log('buscar')
    }
    
     useEffect(() => {
                const handleResize = () => {
                    setIsLargeScreen(window.innerWidth >= 992); // Bootstrap 'lg' breakpoint (≥992px)
                };
        
                // Inicializar y escuchar cambios en el tamaño de la ventana
                handleResize();
                window.addEventListener("resize", handleResize);
        
                // Limpieza del evento al desmontar
                return () => {
                    window.removeEventListener("resize", handleResize);
                };
            }, []);
    
    return (
        <div className="bg-white px-1 py-3 gx-0 d-flex justify-content-center rounded-3 nunito container-fluid">
            <div className="row w-100 px-0 mx-0 d-flex justify-content-around">
                <div className="col-3 col-lg-3 p-0 m-0 g-0 row">
                    <label htmlFor="checkbox" className="form-label tu-font" style={{ fontSize: 12,}}>Transacción</label>
                    <div id="checkbox" className="form-check col">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="isPurchase"/>
                        <label className="form-check-label fw-light" htmlFor="isPurchase">
                            Comprar
                        </label>
                    </div>
                    <div className="form-check col">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="isRental" defaultChecked/>
                        <label className="form-check-label fw-light" htmlFor="isRental">
                            Alquilar
                        </label>
                    </div>
                </div>
                <div className="col-3 row px-0 mx-0 gx-0 col-lg-2">
                    <label htmlFor="propertyType" className="form-label tu-font" style={{ fontSize: 12,}}>Tipo de Propiedad</label>
                    <select 
                        id="propertyType" 
                        className="form-select bg-secondary-subtle text-secondary fw-light" 
                        aria-label="Default select example" 
                        style={ !isLargeScreen? {height: 40,}: {}}
                    >
                        <option selected> { isLargeScreen ? 'Mostrar todos': 'Todos'}</option>
                        <option value="1">Apartamento</option>
                        <option value="2">Casa</option>
                        <option value="3">Locales</option>
                    </select>
                </div>
                <div className="col-3 row px-0 mx-0 gx-0 col-lg-3">
                    <label htmlFor="location" className="form-label tu-font" style={{ fontSize: 12}}>Ubicación</label>
                    <select 
                        id="location" 
                        className="form-select bg-secondary-subtle text-secondary fw-light" 
                        aria-label="Default select example" 
                        style={ !isLargeScreen? {height: 40, alignSelf:'flex-end'}: {}}
                    >
                        <option selected>{ isLargeScreen ? 'Mostrar todos': 'Todos'}</option>
                        <option value="1">Arona</option>
                        <option value="2">Granadilla</option>
                        <option value="3">Los Gigantes</option>
                    </select>
                </div>
                <div className="col-2 row px-0 mx-0 gx-0 gx-1" style={!isLargeScreen? {display:"none"}: {}}>
                    <span className="col" >
                        <label htmlFor="location" className="form-label tu-font" style={{ fontSize: 12}}>Precio</label>
                        <select id="location" className="form-select bg-secondary-subtle text-secondary fw-light" aria-label="Default select example" >
                            <option className="text-secondary fw-lighter nunito" selected>Desde</option>
                            <option className="text-secondary fw-lighter nunito" value="1">100</option>
                            <option className="text-secondary fw-lighter nunito" value="2">200</option>
                            <option className="text-secondary fw-lighter nunito" value="3">300</option>
                        </select>
                    </span>
                    <span className="col align-self-end">
                        <select id="priceEnd" className="form-select bg-secondary-subtle text-secondary fw-light" aria-label="Default select example">
                            <option selected>Hasta</option>
                            <option value="1">100</option>
                            <option value="2">200</option>
                            <option value="3">300</option>
                        </select>
                    </span>
                </div>
                <div className="col-2 col-lg-2 gx-0 d-flex justify-content-end">
                    {!isLargeScreen && (
                        <button type="button" className="btn-secondary rounded my-2 w-100" children={<img src={Scope}/>} />
                    )}
                    {isLargeScreen && (
                        <ButtonImage id='searchButton' text={'Buscar'} icon="scope" someFunction={SearchResults} />
                    )}
                </div>
            </div>
        </div>
    );
}