import { createContext, useState, useEffect } from "react";

// 1️⃣ Crear el contexto
export const GlobalContext = createContext(null);

// 2️⃣ Crear el proveedor del contexto
export const GlobalProvider = ({ children }) => {
    const [isTownsLoaded, setIsTownsLoaded] = useState(false);
    const [isTownsPropertiesLoaded, setIsPropertiesLoaded] = useState(false);
    const [store, setStore] = useState({
        propertiesList: [],
        townsList: [],
        municipalitiesList: [],
        availableTowns: [],
        user: {},
        filterOptions: {transactionType: "rental",
            propertyType: "",
            location: "",
            priceStart: 0,
            priceEnd: 99999999
        },
        filteredProperties: [],
        session: false,
    });

    const actions = {
        getMessage: () => console.log("🔹 Contexto cargado correctamente"),
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
                  console.log(data);
                } else {
                  console.log('Error:', response.status, response.statusText);
                }
            }
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
                  console.log(data);
                  setIsTownsLoaded(true);
                } else {
                    console.log('Error:', response.status, response.statusText);
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
                    setIsPropertiesLoaded(true);
                  console.log('propiedades', data);
                } else {
                    console.log('Error:', response.status, response.statusText);
                }
            }
        },
        getToken: () => {
            return localStorage.getItem("token");
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
        updateAvailableTowns: () => {
            setStore((prevStore) => {
                // Obtener una lista de IDs de las poblaciones que tienen propiedades
                const propertyTownIds = [...new Set(prevStore.propertiesList.map(property => property.town))];
                // Filtrar townsList para dejar solo los que coinciden con los IDs anteriores
                const availableTowns = propertyTownIds.sort(); // Ordenar alfabéticamente
                return {...prevStore, availableTowns,};
            });
        },
        updatePropertiesWithTowns: async () => {
            if (store.propertiesList.length > 0 && store.townsList.length > 0) {
                await setStore((prevStore) => {
                    const updatedProperties = prevStore.propertiesList.map(property => {
                        // Buscar el town en townsList que coincida con el id_town
                        const town = prevStore.townsList.find(town => town.id === property.id_town);

                        // Retornar la propiedad con el name del town en lugar del id_town
                        return {
                            ...property,
                            town: town ? town.name : "Desconocido", // Si no encuentra el town, asigna "Desconocido"
                        };
                    });
        
                    return {
                        ...prevStore,
                        propertiesList: updatedProperties
                    };
                });
                actions.updateAvailableTowns();
                console.log('properties with towns', store.propertiesList);
            }
        },
        setFilters: (data) => {
            setStore((prevStore)=>{
                return{
                    ...prevStore,
                    filterOptions: data
                }
            });
        },
        useFilters: () => {
            setStore((prevStore) => {
                const { transactionType, propertyType, location, priceStart, priceEnd } = store.filterOptions;
                const searchedProperties = prevStore.propertiesList.filter(property => property.type === propertyType);
                console.log('buscamos', propertyType, 'en ', prevStore.propertiesList);
                return {
                    ...prevStore,
                    filteredProperties: searchedProperties
                };
            });
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
        actions.getMessage();
        actions.getMunicipalities();
        actions.getTowns();
        actions.getProperties();
        if (store.townsList.length > 0 && store.propertiesList.length > 0) actions.updateAvailableTowns();
    }, []);

    useEffect(() => {
        if (isTownsLoaded && isTownsPropertiesLoaded) {
            actions.updatePropertiesWithTowns();
        }
    }, [isTownsLoaded, isTownsPropertiesLoaded]);
   
    useEffect(() => {
        console.log('availabletowns', store.availableTowns);
    }, [actions.updatePropertiesWithTowns]);
    
    
    return (
        <GlobalContext.Provider value={{ store, actions }}>
            {children}
        </GlobalContext.Provider>
    );
};
