import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../store/GlobalContext.jsx";
import { rentPrices, sellPrices } from "../constants/prices.js";
import {selectedAmenitiesEnum} from '../constants/amenitiesEnum.js'
import { ButtonImage } from "./ButtonImage.jsx";
import '../styles/SimpleSearchBar.css'

export const AdvancedSearchbar = () => {
    const { store, actions } = useContext(GlobalContext);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const [formValues, setFormValues] = useState({
        transactionType: "alquiler",  // Estado inicial en "Alquilar"
        propertyType: "",
        location: "",
        priceStart: "",
        priceEnd: "",
        order:"alto",
        area:"",
        bathrooms:"",
        bedrooms:"",
        amenities:[],
        buiildingStatus:"nuevo",
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

    const cleanFilters =()=> {
        console.log('borrando filtros');
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
            className="row px-2 pt-3 pb-4 mx-0 d-flex justify-content-around bg-white rounded-3 nunito"
        >
            <div className="row col-12 col-lg-6 pt-4">
                <div className="row col-7">
                    <label htmlFor="checkbox" className="form-label tu-font py-0 my-0" style={{ fontSize: 13,}}>Transacción</label>
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
                <div className={`col`}>
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
                        <option selected value=""> { isLargeScreen ? 'Mostrar todos': 'Todos'}</option>
                        <option value="apartamento">Apartamento</option>
                        <option value="casa">Casa</option>
                        <option value="local">Locales</option>
                    </select>
                </div>
            </div>
            <div className="col-12 col-lg-6 row pt-4">
                <div className="col col-lg-6">
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
                <span className="col-auto col-lg-3" >
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
                <span className="col-auto col-lg-3">
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
            <div className="row col-12 col-lg-7 pt-4">
                <div className="col-7 row">
                    <label htmlFor="checkbox" className="form-label tu-font" style={{ fontSize: 13,}}>Ordenar por</label>
                    <div id="checkbox" className="form-check col">
                        <input className="form-check-input" type="radio" name="order" id="lowPrice" value='barato' checked={formValues.order === "barato"} onChange={handleChange}/>
                        <label className="form-check-label fw-light" htmlFor="lowPrice">
                            Más Barato
                        </label>
                    </div>
                    <div className="form-check col">
                        <input className="form-check-input" type="radio" name="order" id="higherPrice" value='alto' checked={formValues.order === "alto"} onChange={handleChange}/>
                        <label className="form-check-label fw-light" htmlFor="higherPrice">
                            Más Alto
                        </label>
                    </div>
                </div>
                <div className="col">
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
                <div className="col">
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
            </div>
            <div className="row col-12 col-lg-5 pt-4">
                <div className="col-auto">
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
                <div className="col">
                    <label htmlFor="location" className="form-label tu-font" style={{ fontSize: 13}}>Características</label>
                    <div className="dropdown">
                        <button type="button" className="btn form-select bg-secondary-subtle " data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
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
            <div className="row col-12 col-lg-9 pt-4">
                <div className="row col col-lg-8 ps-4">
                    <label htmlFor="buildingStateCheckbox" className="form-label tu-font" style={{ fontSize: 13,}}>Estado de la propiedad</label>
                    <div id="buildingStateCheckbox" className="form-check col-auto">
                        <input className="form-check-input" type="radio" name="buiildingStatus" id="newProperty" value='nuevo' checked={formValues.buiildingStatus === "nuevo"} onChange={handleChange}/>
                        <label className="form-check-label fw-light" htmlFor="newProperty">
                            Nueva
                        </label>
                    </div>
                    <div className="form-check col-auto">
                        <input className="form-check-input" type="radio" name="buiildingStatus" id="reformedProperty" value='reformado' checked={formValues.buiildingStatus === "reformado"} onChange={handleChange}/>
                        <label className="form-check-label fw-light" htmlFor="reformedProperty">
                            Reformada
                        </label>
                    </div>
                    <div className="form-check col-auto">
                        <input className="form-check-input" type="radio" name="buiildingStatus" id="notReformed" value='a reformar' checked={formValues.buiildingStatus === "a reformar"} onChange={handleChange}/>
                        <label className="form-check-label fw-light" htmlFor="notReformed">
                            A Reformar
                        </label>
                    </div>
                </div>
                <div className="col align-self-end">
                    <a role="button" className="fw-normal nunito link-underline-secondary text-dark text-center" onClick={cleanFilters}> Restaurar Filtros</a>
                </div>
            </div>
            <div className="col-12 col-lg align-self-end pt-4">
                <ButtonImage id='searchButton' text={'Buscar'} icon="scope" someFunction={handleSubmit} />
            </div>
        </form>
    );
}