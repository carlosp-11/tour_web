import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../store/GlobalContext.jsx";
import { rentPrices, sellPrices } from "../constants/prices.js";
import { ButtonImage } from "./ButtonImage";
import Scope from "../assets/svg/scope.svg";
import '../styles/SimpleSearchBar.css'

export const SimpleSearchbar = () => {
    const { store, actions } = useContext(GlobalContext);
    const [isLoading, setIsLoading] = useState(true);
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const [formValues, setFormValues] = useState({
        transactionType: "alquiler",  // Estado inicial en "Alquilar"
        propertyType: "",
        location: "",
        priceStart: "",
        priceEnd: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
    };

    // Enviar formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Valores del formulario:", formValues);
        // Aquí puedes enviar los datos a tu backend o contexto global
        actions.setFilters(formValues);
        actions.useFilters();
        console.log('filter values', store.filterOptions, );
        console.log('resultados: ', store.filteredProperties);
    };
    
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

    useEffect(() => {
        if (store.availableTowns.length > 0) {
            setIsLoading(false);
        }
    }, [store.availableTowns]);
    
    return (
        // <div className={`bg-white py-3 d-flex justify-content-center rounded-3 nunito container-fluid simplesearchbar ${isLargeScreen? 'px-3':'px-1 gx-0'}`}>
            <form onSubmit={handleSubmit} className="row w-100 gx-0 px-2 py-3 mx-0 d-flex justify-content-around bg-white rounded-3  nunitocontainer-fluid simplesearchbar">
                <div className="col-3 col-lg-3 p-0 m-0 gy-0 gx-1 row">
                    <label htmlFor="checkbox" className="form-label tu-font" style={{ fontSize: 13,}}>Transacción</label>
                    <div id="checkbox" className="form-check col">
                        <input className="form-check-input" type="radio" name="transactionType" id="isPurchase" value='comprar' checked={formValues.transactionType === "comprar"} onChange={handleChange}/>
                        <label className="form-check-label fw-light" htmlFor="isPurchase">
                            Comprar
                        </label>
                    </div>
                    <div className="form-check col">
                        <input className="form-check-input" type="radio" name="transactionType" id="isRental" value='alquiler' checked={formValues.transactionType === "alquiler"} onChange={handleChange}/>
                        <label className="form-check-label fw-light" htmlFor="isRental">
                            Alquilar
                        </label>
                    </div>
                </div>
                <div className={`col-3 col-lg-2 ${isLargeScreen? '': 'row px-0 mx-0 gx-0'}`}>
                    <label htmlFor="propertyType" className="form-label tu-font" style={{ fontSize: 13,}}>Tipo de Propiedad</label>
                    <select 
                        id="propertyType"
                        name="propertyType"
                        className="form-select bg-secondary-subtle text-secondary fw-light" 
                        aria-label="Default select example" 
                        style={ !isLargeScreen? {height: 40,  alignSelf:'flex-end', paddingLeft: 5}: {}}
                        onChange={handleChange}
                        value={formValues.propertyType}
                    >
                        <option selected value=""> { isLargeScreen ? 'Mostrar todos': 'Todos'}</option>
                        <option value="apartamento">Apartamento</option>
                        <option value="casa">Casa</option>
                        <option value="local">Locales</option>
                    </select>
                </div>
                <div className={`col-3 col-md-4 ${isLargeScreen? 'col-lg-2':'row px-0 mx-0 gx-0 col-lg-3'}`}>
                    <label htmlFor="location" className="form-label tu-font" style={{ fontSize: 13}}>Ubicación</label>
                    <select 
                        id="location"
                        name="location"
                        className="form-select bg-secondary-subtle text-secondary fw-light" 
                        aria-label="Default select example" 
                        onChange={handleChange}
                        value={formValues.location}
                        style={ !isLargeScreen? {height: 40, alignSelf:'flex-end', paddingLeft: 5}: {}}
                    >
                        <option value="" selected>{isLargeScreen ? 'Mostrar todos' : 'Todos'}</option>
                        {isLoading ? 
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="spinner-border text-secondary" role="status">
                                    <span className="visually-hidden">Cargando...</span>
                                </div>
                            </div>
                            : 
                            store.availableTowns.map((item, index) => (
                                <option key={index} value={item}>{item}</option>
                            ))
                        }
                    </select>
                </div>
                <div className={`col-3 row ${!isLargeScreen? 'd-none':''}`}>
                    <span className="col align-self-end" >
                        <label htmlFor="prices" className="form-label tu-font" style={{ fontSize: 13}}>Precio</label>
                        <select 
                            id="priceStart"
                            name="priceStart"
                            className="form-select bg-secondary-subtle text-secondary fw-light" 
                            aria-label="Default select example"
                            onChange={handleChange}
                            value={formValues.priceStart} 
                        >
                            <option className="text-secondary fw-lighter nunito" value={0.1} selected>Desde</option>
                            {formValues.transactionType === 'rental'? 
                                rentPrices.slice(0, -1).map(({ value, label }, index) => (
                                    <option key={index} value={value}>{label}</option>
                                )) :
                                sellPrices.slice(0, -1).map(({ value, label }, index) => (
                                    <option key={index} value={value}>{label}</option>
                                ))
                            }
                        </select>
                    </span>
                    <span className="col align-self-end">
                        <select 
                            id="priceEnd" 
                            name="priceEnd"
                            className="form-select bg-secondary-subtle text-secondary fw-light" 
                            aria-label="Default select example"
                            onChange={handleChange}
                            value={formValues.priceEnd}
                        >
                            <option selected value={99999998}>Hasta</option>
                            {formValues.transactionType === 'rental'?  
                                rentPrices.slice(1).map(({ value, label }, index) => (
                                    <option key={index} value={value}>{label}</option>
                                )) :
                                sellPrices.slice(1).map(({ value, label }, index) => (
                                    <option key={index} value={value}>{label}</option>
                                ))
                            }
                        </select>
                    </span>
                </div>
                <div className={`col-2 col-md-1 col-lg-auto gx-0 d-flex ${isLargeScreen? 'mt-3 justify-content-center': 'justify-content-end'}`}>
                    {!isLargeScreen && (
                        <button type="submit" className="btn-secondary rounded my-2 w-100 " children={<img src={Scope} className=""/>} />
                    )}
                    {isLargeScreen && (
                        <ButtonImage id='searchButton' text={'Buscar'} icon="scope" someFunction={handleSubmit} />
                    )}
                </div>
            </form>
        // </div>
    );
}