import { PropertiesCard } from "./PropertiesCard";
import { useContext } from 'react';
import { GlobalContext } from '../store/GlobalContext';
import React, {useState, useEffect} from 'react';


export const SmallPropertiesDisplay = () => {
    const {store} =useContext(GlobalContext);
    const [cards, setCards] = useState([]);
    
     useEffect(()=> {
        console.log('cards', cards);
            setCards(store.propertiesList.slice(0, 5))
        }, [store.propertiesList])

    return(
        <div className="">
            {cards.map((card, index) => (
                <div className="col-auto mx-auto" style={{maxWidth: 390}}>
                    <PropertiesCard
                        number={card.number} 
                        location={card.location} 
                        price={card.price}  
                        type={card.type} 
                        area={card.area} 
                        key={index}
                    />
                </div>
            ))}
        </div>
    );
}