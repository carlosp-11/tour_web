import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../store/GlobalContext.jsx";
import { rentPrices, sellPrices } from "../constants/prices.js";
import {selectedAmenitiesEnum} from '../constants/amenitiesEnum.js'
import { ButtonImage } from "./ButtonImage.jsx";
import '../styles/SimpleSearchBar.css'

export const AdvancedSearchbar = (props) => {
    const { store, actions } = useContext(GlobalContext);
    const [isLoading, setIsLoading] = useState(true);
    const [hasChanged, setHasChanged] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const initialValues = {
        buildingStatus : "todos",
        set: props.transaction || 'alquiler',  // Estado inicial en "Alquilar"
        transactionType: props.transaction || 'alquiler',
        type: "filter",
        propertyType: "",
        location: "",
        priceStart: "",
        priceEnd: "",
        area:"",
        bathrooms:"",
        bedrooms:"",
        amenities:[],
    };

    const [formValues, setFormValues] = useState({...initialValues});

    const handleChange = async (event) => {
        const { name, value } = event.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
        setHasChanged(true);
    };

    // Enviar formulario
    const handleSubmit = async () => {
        //event.preventDefault();
        console.log("vamos a buscar con estos valores:", formValues);
        // Aquí puedes enviar los datos a tu backend o contexto global
        await actions.setFilters(formValues);
        //await actions.useFilters(formValues);
    };

    const cleanFilters =()=> {
        actions.useFilters({type: 'reset', set: props.transaction});
        setFormValues({...initialValues});
        setHasChanged(false);
    };

    const handleAmenityChange = (event) => {
        const { value, checked } = event.target;
        setFormValues((prev) => ({
            ...prev,
            amenities: checked
                ? [...prev.amenities, value]
                : prev.amenities.filter((amenity) => amenity !== value),
        }));
    };

    const handlePropertyStatusChange = (event) => {
        setFormValues((prev) => ({
            ...prev,
            property_status: event.target.value  // Almacena solo un valor
        }));
    };
    
     useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 992);
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
        <form onSubmit={handleSubmit} 
            className="row px-0 pt-3 pb-4 mx-0 d-flex justify-content-center bg-white rounded-3 nunito"
        >
            <div className="row col-12">
                <div className="col-12 col-md-4 col-lg-3 pt-4">
                    <label htmlFor="propertyType" className="form-label tu-font" style={{ fontSize: 13,}}>Tipo de Propiedad</label>
                    <select 
                        id="propertyType"
                        name="propertyType"
                        className="form-select bg-secondary-subtle text-secondary fw-light" 
                        aria-label="Default select example" 
                        style={ !isLargeScreen? {}: {}}
                        onChange={handleChange}
                        value={formValues.propertyType}
                    >
                        <option selected value="todos"> { isLargeScreen ? 'Mostrar todos': 'Todos'}</option>
                        <option value="apartamento">Apartamento</option>
                        <option value="casa">Casa</option>
                        <option value="local">Locales</option>
                    </select>
                </div>
                <div className="col-lg col-md col-sm-12 pt-4">
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
                        <option value="todos" selected>{isLargeScreen ? 'Mostrar todos' : 'Todos'}</option>
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
                <div className="row col-lg-auto col-md-12 col-sm pt-lg-4 pt-xl-4">
                    <span className="col-auto d-none d-lg-block" >
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
                            {formValues.transactionType === 'alquiler'? 
                                rentPrices.slice(0, -1).map(({ value, label }, index) => (
                                    <option key={index} value={value}>{label}</option>
                                )) :
                                sellPrices.slice(0, -1).map(({ value, label }, index) => (
                                    <option key={index} value={value}>{label}</option>
                                ))
                            }
                        </select>
                    </span>
                    <span className="col-auto d-none d-lg-block">
                        <label htmlFor="prices" className="form-label tu-font text-white" style={{ fontSize: 13}}>.</label>
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
                    </span>
                </div>
            </div>
            <div className="row col-12 pt-4">
                <span className="col col-lg-auto col-md-auto d-lg-none" >
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
                        {formValues.transactionType === 'alquiler'? 
                            rentPrices.slice(0, -1).map(({ value, label }, index) => (
                                <option key={index} value={value}>{label}</option>
                            )) :
                            sellPrices.slice(0, -1).map(({ value, label }, index) => (
                                <option key={index} value={value}>{label}</option>
                            ))
                        }
                    </select>
                </span>
                <span className="col col-lg-auto col-md-auto d-lg-none">
                    <label htmlFor="prices" className="form-label tu-font text-white" style={{ fontSize: 13}}>.</label>
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
                </span>
                <div className="row col-12 col-lg-auto col-md px-0 mx-0 pt-4 pt-md-0 pt-lg-0 pt-xl-0">
                    <div className="col col-lg-auto">
                        <label htmlFor="propertyArea" className="form-label tu-font" style={{ fontSize: 13,}}>Superficie</label>
                        <select 
                            id="propertyArea"
                            name="area"
                            className="form-select bg-secondary-subtle text-secondary fw-light" 
                            aria-label="Default select example" 
                            onChange={handleChange}
                            value={formValues.area}
                        >
                            <option selected value="">Todos</option>
                            <option value="20">25m2</option>
                            <option value="50">50m2</option>
                            <option value="75">75m2</option>
                            <option value="100">100m2</option>
                            <option value="125">125m2</option>
                            <option value="150">150m2</option>
                            <option value="9999">+150m2</option>
                        </select>
                    </div>
                    <div className="col col-lg-auto">
                        <label htmlFor="propertyBathroom" className="form-label tu-font" style={{ fontSize: 13}}>Baños</label>
                        <select 
                            id="propertyBathroom"
                            name="bathrooms"
                            className="form-select bg-secondary-subtle text-secondary fw-light" 
                            aria-label="Default select example" 
                            onChange={handleChange}
                            value={formValues.bathrooms}
                        >
                            <option value="" selected>Todos</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="99">+ 4</option>
                        </select>
                    </div>
                    <div className="col col-lg-auto">
                        <label htmlFor="location" className="form-label tu-font" style={{ fontSize: 13}}>Habitaciones</label>
                        <select 
                            id="location"
                            name="bedrooms"
                            className="form-select bg-secondary-subtle text-secondary fw-light" 
                            aria-label="Default select example" 
                            onChange={handleChange}
                            value={formValues.bedrooms}
                        >
                            <option value="" selected>Todos</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="99">+ 5</option>

                        </select>
                    </div>
                </div>
                <div className="col-12 col-lg">
                    <label htmlFor="location" className="form-label tu-font pt-4 pt-lg-0 pt-xl-0" style={{ fontSize: 13}}>Características</label>
                    <div className="dropdown">
                        <button type="button" className="btn form-select bg-secondary-subtle " data-bs-toggle="dropdown" 
                            aria-expanded="false" data-bs-auto-close="outside"
                        >
                            Seleccionar
                        </button>
                        <form className="dropdown-menu p-4 bg-secondary-subtle w-100">
                            <div className="mb-3">
                                {selectedAmenitiesEnum.map((amenity, index) => (
                                    <div key={index} className="form-check">
                                        <input 
                                            type="checkbox" 
                                            className="form-check-input" 
                                            id={`amenity-${index}`} 
                                            value={amenity}
                                            checked={formValues.amenities.includes(amenity)}
                                            onChange={handleAmenityChange}
                                        />
                                        <label className="form-check-label" htmlFor={`amenity-${index}`}>
                                            {amenity}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="row col-12 col-lg-9">
                <div className="row col col-lg ps-4 pt-4">
                    <label htmlFor="buildingStateCheckbox" className="form-label tu-font" style={{ fontSize: 13,}}>Estado de la propiedad</label>
                    <div id="buildingStateCheckbox" className="form-check col-auto">
                        <input className="form-check-input" type="radio" name="buildingStatus" id="newProperty" 
                            value='nuevo' checked={formValues.buildingStatus === "nuevo"} onChange={handleChange}
                        />
                        <label className="form-check-label fw-light" htmlFor="newProperty">
                            Nueva
                        </label>
                    </div>
                    <div className="form-check col-auto">
                        <input className="form-check-input" type="radio" name="buildingStatus" id="reformedProperty" 
                            value='reformado' checked={formValues.buildingStatus === "reformado"} onChange={handleChange}
                        />
                        <label className="form-check-label fw-light" htmlFor="reformedProperty">
                            Reformada
                        </label>
                    </div>
                    <div className="form-check col-auto">
                        <input className="form-check-input" type="radio" name="buildingStatus" id="notReformed" 
                            value='a reformar' checked={formValues.buildingStatus === "a reformar"} onChange={handleChange}
                        />
                        <label className="form-check-label fw-light" htmlFor="notReformed">
                            A Reformar
                        </label>
                    </div>
                    <div className="form-check col-auto">
                        <input className="form-check-input" type="radio" name="buildingStatus" id="all" 
                            value='todos' checked={formValues.buildingStatus === "todos"} onChange={handleChange}
                        />
                        <label className="form-check-label fw-light" htmlFor="all">
                            Todas
                        </label>
                    </div>
                </div>
                <div className="col-md-4 col-lg-4 pt-4 align-self-end text-center">
                    <a role="button" className="fw-normal nunito link-underline-secondary text-dark text-center" onClick={cleanFilters}> 
                        Restaurar Filtros
                    </a>
                </div>
            </div>
            <div className="col-12 col-lg align-self-end pt-4">
                <ButtonImage isDisabled={hasChanged} id='searchButton' text={'Buscar'} icon="scope" someFunction={handleSubmit} />
            </div>
        </form>
    );
}