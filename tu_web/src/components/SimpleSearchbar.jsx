import { ButtonImage } from "./ButtonImage";
import { useEffect, useState } from "react";

export const SimpleSearchbar = () => {

    const [isLargeScreen, setIsLargeScreen] = useState(false);
    
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
        <div className="bg-white row py-4 d-flex justify-content-center rounded-4">
            <div className="col-3 row">
                <label for="propertyType" className="form-label">Transacción</label>
                <div className="form-check col-12 col-lg-6">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="isPurchase"/>
                    <label className="form-check-label" for="isPurchase">
                        Comprar
                    </label>
                </div>
                <div className="form-check col-12 col-lg-6">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="isRental" checked/>
                    <label className="form-check-label" for="isRental">
                        Alquilar
                    </label>
                </div>
            </div>
            <div className="col-7 row">
                <div className="col-6 col-lg-4">
                    <label for="propertyType" className="form-label">Tipo de </label>
                    <select id="propertyType" className="form-select bg-secondary-subtle" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="col-6 col-lg-4">
                    <label for="location" className="form-label">Ubicación</label>
                    <select id="location" className="form-select bg-secondary-subtle" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="col-4 row gx-1" style={!isLargeScreen? {display:"none"}: {}}>
                    <span className="col-6" >
                        <label for="location" className="form-label">Precio</label>
                        <select id="location" className="form-select bg-secondary-subtle" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </span>
                    <span className="col-6 align-self-end">
                        <select id="priceEnd" className="form-select bg-secondary-subtle" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </span>
                </div>
            </div>
            <div className="col-2 align-self-center d-flex justify-content-center">
                <ButtonImage text={isLargeScreen ? 'Buscar': ''} icon="scope" onClick={console.log('hola')}/>
            </div>
        </div>
    );
}