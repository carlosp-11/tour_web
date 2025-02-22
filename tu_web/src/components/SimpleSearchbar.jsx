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
        actions.useFilters({type:'filter', set: formValues.transactionType });
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
        <form onSubmit={handleSubmit} className="row d-flex px-2 justify-content-center w-100 py-3 mx-auto bg-white rounded-3 nunito">
            <div className="col-12 col-lg col-xl col-md-auto ps-4 pb-3 pb-md-0 pb-lg-0 pb-xl-0">
                <label htmlFor="checkbox" className="form-label tu-font" style={{ fontSize: 13,}}>Transacción</label>
                <div className="row">
                    <div id="checkbox" className="form-check col">
                        <input 
                            checked={formValues.transactionType === "comprar"} 
                            className="form-check-input" 
                            id="isPurchase" 
                            name="transactionType" 
                            onChange={handleChange}
                            type="radio" 
                            value='comprar' 
                        />
                        <label className="form-check-label fw-light" htmlFor="isPurchase">
                            Comprar
                        </label>
                    </div>
                    <div className="form-check col">
                        <input 
                            checked={formValues.transactionType === "alquiler"} 
                            className="form-check-input" 
                            id="isRental" 
                            name="transactionType" 
                            onChange={handleChange}
                            type="radio" 
                            value='alquiler' 
                        />
                        <label className="form-check-label fw-light" htmlFor="isRental">
                            Alquilar
                        </label>
                    </div>
                </div>
            </div>
            <div className="col col-md-3 col-lg-2 col-xl-2">
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
                    <option value="piso">Piso</option>
                    <option value="casa">Casa</option>
                    <option value="local">Local</option>
                </select>
            </div>
            <div className="col">
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
            <div className="col-auto d-none d-lg-block">
                <label htmlFor="prices" className="form-label tu-font" style={{ fontSize: 13}}>Precio</label>
                <div className="row" id="prices">
                    <div className="col-auto" >
                        <select 
                            id="priceStart"
                            name="priceStart"
                            className="form-select bg-secondary-subtle text-secondary fw-light" 
                            aria-label="Default select example"
                            onChange={handleChange}
                            value={formValues.priceStart} 
                        >
                            <option className="text-secondary fw-lighter nunito" value={0.1} selected>Desde</option>
                            {formValues.transactionType === 'alquiler'? 
                                rentPrices.slice(0, -1).map(({ value, label }, index) => (
                                    <option key={index} value={value}>{label}</option>
                                )) :
                                sellPrices.slice(0, -1).map(({ value, label }, index) => (
                                    <option key={index} value={value}>{label}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="col-auto">
                        <select 
                            id="priceEnd" 
                            name="priceEnd"
                            className="form-select bg-secondary-subtle text-secondary fw-light" 
                            aria-label="Default select example"
                            onChange={handleChange}
                            value={formValues.priceEnd}
                        >
                            <option selected value={99999998}>Hasta</option>
                            {formValues.transactionType === 'alquiler'?  
                                rentPrices.slice(1).map(({ value, label }, index) => (
                                    <option key={index} value={value}>{label}</option>
                                )) :
                                sellPrices.slice(1).map(({ value, label }, index) => (
                                    <option key={index} value={value}>{label}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
            </div>
            <div className=" col-12 col-lg-auto col-md-2 col-xl-auto  align-self-center px-1 pt-4 pt-md-0 pt-lg-0 pt-xl-0">   
                <button type="submit" className="btn-secondary rounded w-100" children={<p className="text-center align-self-center fw-light fs-5 px-2 py-0 py-md-2 py-lg-1 py-xl-1 mb-0"> {isLargeScreen? 'Buscar': ''} <img src={Scope} className="align-self-center"/> </p>} />
                        {/* <ButtonImage id='searchButton' text={'Buscar'} icon="scope" someFunction={handleSubmit} /> */}
            </div>
        </form>
    );
}