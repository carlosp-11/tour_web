import React, {useState, useEffect} from 'react';
import { PropertiesCard } from './PropertiesCard';
import RightArrowSVG from '../assets/svg/right-arrow.svg';
import LeftArrowSVG from '../assets/svg/left-arrow.svg';
import { useContext } from 'react';
import { GlobalContext } from '../store/GlobalContext';
import { SpinnerComponent } from './SpinnerComponent';

export const PropertiesCarrousel  = () => {
 // const [currentIndex, setCurrentIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const {store} =useContext(GlobalContext);
    
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

    const [cards, setCards] = useState([]);
    const [displayedCards, setDisplayedCards] = useState([]);
  
    useEffect(()=> {
        setCards(store.propertiesList.slice(0, 5))
    }, [store.propertiesList])

    const visibleCardsCount = isSmallScreen ? 1 : isLargeScreen ? 3 : 2;

    useEffect(() => {
        if (cards.length > 0) {
          const newDisplayedCards = [];
          for (let i = 0; i < visibleCardsCount; i++) {
            newDisplayedCards.push(cards[(startIndex + i) % cards.length]);
          }
          setDisplayedCards(newDisplayedCards);
        }
      }, [cards, startIndex, visibleCardsCount]);
      const handleNext = () => {
        if (cards.length > 0) {
          setStartIndex((prevIndex) => (prevIndex + 1) % cards.length);
        }
      };
    
      const handlePrev = () => {
        if (cards.length > 0) {
          setStartIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
        }
      };


  return (
    <div className="mt-2 mx-0 px-0">
        <div className="row mx-0 px-0">
            {displayedCards.length > 0 ? (
          displayedCards.map((card, index) => (
            <div className="col-auto mx-auto" style={{ maxWidth: 395 }} key={index}>
              <PropertiesCard
                number={card.number}
                location={card.location}
                price={card.price}
                type={card.type}
                area={card.area}
                name={card.name}
                image={card.media?.[0]?.url}
                data={card.id}
              />
            </div>
          ))
        ) : (
          <SpinnerComponent />
        )}
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
