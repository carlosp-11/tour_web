import { PropertiesCard } from "./PropertiesCard";

export const SmallPropertiesDisplay = () => {
    const cards =[
        {
            number: 3, 
            location:'LOS CRISTIANOS', 
            price:'1.500€', 
            type: 'Local',
            area: '100'
        },
        {
            number: 4, 
            location:'LAS GALLETAS', 
            price:'850€', 
            type: 'Apartamento',
            area: '60'
        },
        {
            number: 5, 
            location:'EL MÉDANO', 
            price:'1.800€', 
            type: 'Local',
            area: '80'
        },
    ]
    return(
        <div className="">
            {cards.map((card, index) => (
                <div className={`col d-flex justify-content-center`}>
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