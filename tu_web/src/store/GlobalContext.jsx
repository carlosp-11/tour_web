import { createContext, useState, useEffect } from "react";

// 1️⃣ Crear el contexto
export const GlobalContext = createContext(null);

// 2️⃣ Crear el proveedor del contexto
export const GlobalProvider = ({ children }) => {
    const [store, setStore] = useState({
        availableTowns: [],
        currentProperty: {},
        filterForSaleProperties: [],
        filterOptions: {
            transactionType: '',
            propertyType: '',
            location: '',
            priceStart: 0,
            priceEnd: 99999999
        },
        filterRentalProperties: [],
        forSaleProperties: [],
        municipalitiesList: [],
        propertiesList: [],
        rentalProperties: [],
        session: false,
        townsList: [],
        user: {},
    });

    const actions = {
        categorizeProperties: () => {
            setStore((prevStore) => {
                const rentProperties = prevStore.propertiesList.filter(property => property.transaction === 'alquiler');
                const saleProperties = prevStore.propertiesList.filter(property => property.transaction === 'compra');
                return {
                    ...prevStore,
                    rentalProperties: rentProperties,
                    forSaleProperties: saleProperties,
                    filterRentalProperties: rentProperties,
                    filterForSaleProperties: saleProperties,
                };
            });
        },
        getMunicipalities: async ()=>{
            if (store.municipalitiesList.length < 1){
                const url = `${import.meta.env.VITE_BACKEND_URL}/municipalities`;
                const options = {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        //'Authorization': `Bearer ${store.token}`
                    },
                }
                const response = await fetch(url, options);
                if (response.ok) {
                  const data = await response.json();
                  setStore((prevStore)=> ({
                    ...prevStore,
                    municipalitiesList: data,
                  }))
                  console.log('municipalities', data);
                } else {
                  console.log('Error:[municipalities]', response.status, response.statusText);
                }
            }
        },
        getProperties: async ()=>{
            if (store.propertiesList.length < 1){
                const url = `${import.meta.env.VITE_BACKEND_URL}/properties`;
                const options = {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        //'Authorization': `Bearer ${store.token}`
                    },
                }
                const response = await fetch(url, options);
                if (response.ok) {
                    const data = await response.json();
                    setStore((prevStore)=> ({
                        ...prevStore,
                        propertiesList: data,
                    }))
                    console.log('propiedades', data);
                    actions.updateAvailableTowns();
                    actions.categorizeProperties();
                } else {
                    console.log('Error [properties]:', response.status, response.statusText);
                }
            }
        },
        getPropertyDetails: async (id) =>{
            const url = `${import.meta.env.VITE_BACKEND_URL}/properties/${id}`;
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    //'Authorization': `Bearer ${store.token}`
                },
            }
            const response = await fetch(url, options);
            if (response.ok) {
                const data = await response.json();
                setStore((prevStore)=> ({
                    ...prevStore,
                    currentProperty: data,
                }))
              console.log('detalle de propiedad', data);
            } else {
                console.log('Error [propertyDetails]:', response.status, response.statusText);
            }
        },
        getToken: () => {
            return localStorage.getItem("token");
        },
        getTowns: async ()=>{
            if (store.townsList.length < 1){
                const url = `${import.meta.env.VITE_BACKEND_URL}/towns`;
                const options = {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        //'Authorization': `Bearer ${store.token}`
                    },
                }
                const response = await fetch(url, options);
                if (response.ok) {
                    const data = await response.json();
                    setStore((prevStore)=> ({
                        ...prevStore,
                        townsList: data,
                    }))
                  console.log('towns', data);
                } else {
                    console.log('Error[towns]:', response.status, response.statusText);
                }
            }
        },
        login: (token) => {
            setStore((prevStore) => ({
                ...prevStore,
                user: token,
                session: true,
            }));
            localStorage.setItem('token', token);
        },
        logout: () => {
            setStore((prevStore) => ({
                ...prevStore,
                user: {},
                session: false,
            }));
            localStorage.removeItem('token');
        },
        setFilters: (data) => {
            console.log('setfilters', data)
            setStore((prevStore)=>{
                return{
                    ...prevStore,
                    filterOptions: data
                }
            });
            actions.useFilters({...data, set: data.transactionType});
        },
        updateAvailableTowns: () => {
            setStore((prevStore) => {
                // Obtener una lista de IDs de las poblaciones que tienen propiedades
                const propertyTownIds = [...new Set(prevStore.propertiesList.map(property => property.town.name))];
                // Filtrar townsList para dejar solo los que coinciden con los IDs anteriores
                const availableTowns = propertyTownIds.sort(); // Ordenar alfabéticamente
                return {...prevStore, availableTowns,};
            });
        },
        useFilters: (data) => {
            console.log('usefilters:', data);
            setStore((prevStore) => {
                //let searchedProperties = [];
                let searchedProperties = data.set === 'alquiler' ? 
                [...prevStore.rentalProperties] : 
                [...prevStore.forSaleProperties];

                const { 
                    propertyType, 
                    location, 
                    priceStart, 
                    priceEnd, 
                    area, 
                    bathrooms, 
                    bedrooms, 
                    amenities, 
                    buiildingStatus 
                } = data;
                // const { 
                //     propertyType, 
                //     location, 
                //     priceStart, 
                //     priceEnd, 
                //     area, 
                //     bathrooms, 
                //     bedrooms, 
                //     amenities, 
                //     buiildingStatus 
                // } = store.filterOptions;
                console.log('filtros en variable',  store.filterOptions);
                console.log('filtros activos', propertyType, location, priceStart, priceEnd, area, bathrooms, bedrooms, amenities, buiildingStatus );

                if (data?.type === 'reset'){
                    searchedProperties = data.set === 'alquiler' 
                    ? [...prevStore.rentalProperties] 
                    : [...prevStore.forSaleProperties];
                    console.log('reset', searchedProperties);
                }
                if (data?.type === 'order'){
                    searchedProperties = [...(data.set === 'alquiler' ? prevStore.rentalProperties : prevStore.forSaleProperties)]
                    .sort((a, b) => (data.criteria !== 'asc' ? a.price - b.price : b.price - a.price));
                    console.log('ordering', searchedProperties);
                }
                if(data?.type === 'filter'){
                    console.log('filtramos por ', propertyType, location, priceStart, priceEnd, area, bathrooms, bedrooms, amenities, buiildingStatus );
                    //searchedProperties = data.set === 'alquiler' ? prevStore.rentalProperties : prevStore.forSaleProperties;
                    console.log('antes de filtrar', searchedProperties);
                    if (propertyType !== ''){
                        if (propertyType !== 'todos') {
                            searchedProperties =  searchedProperties.filter(property => property.type === propertyType);
                        }                     
                        console.log('filtramos por propiedad', searchedProperties);
                    }
                    if (location !== ''){
                        if (location !== 'todos') {
                            searchedProperties =  searchedProperties.filter(property => property.town.name === location);
                        }                     
                        console.log('filtramos por locacion', searchedProperties);
                    }
                    if (priceStart){
                        searchedProperties =  searchedProperties.filter(property => Number(property.price) >= priceStart);
                        console.log('filtramos por precio', searchedProperties);
                    }
                    if (priceEnd){
                        searchedProperties =  searchedProperties.filter(property => Number(property.price) <= priceEnd);
                        console.log('filtramos por precio', searchedProperties);
                    }
                    if (area > 0){
                        if (area !== 'todos') {
                            searchedProperties =  searchedProperties.filter(property => property.area <= area);
                        }     
                        console.log('filtramos por area', searchedProperties);
                    }
                    if (bathrooms > 0){
                        if (area !== 'todos') {
                            searchedProperties =  searchedProperties.filter(property => property.bathrooms <= bathrooms);
                        }     
                        console.log('filtramos por baños', searchedProperties);
                    }
                    if (bedrooms > 0){
                        if (area !== 'todos') {
                            searchedProperties =  searchedProperties.filter(property => property.bedrooms <= bedrooms);
                        }     
                        console.log('filtramos por habitaciones', searchedProperties);
                    }
                    // if (buiildingStatus !== ''){
                    //     if (area !== 'todos') {
                    //         searchedProperties =  searchedProperties.filter(property => property.buiildingStatus <= buiildingStatus);
                    //     }     
                    //     console.log('filtramos por estado', searchedProperties);
                    // }
                    
                    if (searchedProperties.length === 0) searchedProperties = [{message:'no hay resultados'}]
                } 
                //console.log('buscamos', propertyType, 'en ', prevStore.propertiesList);
                return {
                    ...prevStore,
                    filterRentalProperties: data.set==='alquiler'? [...searchedProperties] : prevStore.filterRentalProperties,
                    filterForSaleProperties: data.set==='compra'? [...searchedProperties] : prevStore.filterForSaleProperties,
                };
            });
            console.log('Resultado de filtros', store.filterForSaleProperties);
        },
    };


    useEffect(() => {
        const token = actions.getToken();
        if (token) {
            setStore((prevStore) => ({
                ...prevStore,
                session: true,
            }));
        }
       // actions.getMessage();
        actions.getMunicipalities();
        //actions.getTowns();
        actions.getProperties();
    }, []);
    
    return (
        <GlobalContext.Provider value={{ store, actions }}>
            {children}
        </GlobalContext.Provider>
    );
};
