import React, {useState, useEffect} from 'react';
import { PropertiesCard } from './PropertiesCard';
import RightArrowSVG from '../assets/svg/right-arrow.svg';
import LeftArrowSVG from '../assets/svg/left-arrow.svg';

export const PropertiesCarrousel  = () => {
 // const [currentIndex, setCurrentIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
    
  useEffect(() => {
             const handleResize = () => {
                 setIsLargeScreen(window.innerWidth >= 1315); // Bootstrap 'lg' breakpoint (≥992px)
                 setIsSmallScreen(window.innerWidth <= 885); // Bootstrap 'lg' breakpoint (≥992px)
             };
     
             // Inicializar y escuchar cambios en el tamaño de la ventana
             handleResize();
             window.addEventListener("resize", handleResize);
     
             // Limpieza del evento al desmontar
             return () => {
                 window.removeEventListener("resize", handleResize);
             };
         }, []);

  const cards = [
    {
        number: 1, 
        location:'LOS GIGANTES', 
        price:'700€', 
        type: 'Apartamento',
        area: '75'
    },
    {
        number: 2, 
        location:'ADEJE', 
        price:'220.000€', 
        type: 'Casa',
        area: '115'
    },
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
  ];

  const handleNext = () => {
    //setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    // setStartIndex((prevIndex) =>
    //     prevIndex + 3 >= cards.length ? prevIndex : prevIndex + 1
    //   );
    const maxVisibleCards = isSmallScreen ? 1 : isLargeScreen ? 3 : 2;
        setStartIndex((prevIndex) =>
        (prevIndex + 1) % cards.length
        );
  };

  const handlePrev = () => {
    //setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    // setStartIndex((prevIndex) => (prevIndex - 1 < 0 ? prevIndex : prevIndex - 1));
    const maxVisibleCards = isSmallScreen ? 1 : isLargeScreen ? 3 : 2;
    setStartIndex((prevIndex) =>
      (prevIndex - 1 + cards.length) % cards.length
    );
  };
// if(currentIndex>cards.length-3) {
//   setCurrentIndex(0)
// }

const visibleCardsCount = isSmallScreen ? 1 : isLargeScreen ? 3 : 2;
// const displayedCards = cards.slice(startIndex, startIndex + visibleCardsCount);
const displayedCards = [];
for (let i = 0; i < visibleCardsCount; i++) {
  displayedCards.push(cards[(startIndex + i) % cards.length]);
}

  return (
    <div className="mt-2 mx-0 px-0">
        <div className="row mx-0 px-0">
            {/* {cards.slice(currentIndex, currentIndex + 2).map((card, index) => ( */}
            {displayedCards.map((card, index) => (
                <div className={`col-${12 / visibleCardsCount} d-flex justify-content-center`}>
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
        <div className="d-flex align-items-center justify-content-center pt-4 ">
            <button className="btn rounded-5 my-0 mx-4 p-0" onClick={handlePrev} disabled={startIndex === 0} >
                <img src={LeftArrowSVG} alt="flecha a la derecha"/> 
            </button>
            <button className="btn rounded-5 my-0 mx-4 p-0" onClick={handleNext} disabled={startIndex + visibleCardsCount >= cards.length}> 
                <img src={RightArrowSVG} alt="flecha a la derecha"/> 
            </button>
        </div>
    </div>
  );
};
