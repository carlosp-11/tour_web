import { useEffect, useState } from "react";
import { ReviewCard } from "./ReviewCard";
import SwitchLeft from '../assets/icons/switch-left-arrow.png'
import SwitchRight from '../assets/icons/switch-right-arrow.png'

export const ReviewCarrousel = () => {

    const cards =[
        {
            number: 1,
            name:"José", 
            date: "AGOSTO 2024",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat lacus a purus rhoncus pellentesque eu nec mauris. Maecenas at lacus nunc. Quisque pellentesque metus dui, in blandit nisl pulvinar quis. "
        },
        {
            number: 2,
            name:"María", 
            date: "DICIEMBRE 2024",
            text:"Integer condimentum vestibulum odio at mattis. Donec pharetra sem in porttitor mattis. Nam pellentesque nunc in dignissim tempor. Nullam pharetra posuere varius. Proin vitae magna eu erat facilisis interdum. ", 
        },
        {
            number: 3,
            name:"Jesús", 
            date: "JUNIO 2024",
            text:"Cras facilisis libero sem, id bibendum mauris dictum quis. Nunc ac malesuada est. Morbi mollis ipsum vel eros hendrerit, quis fermentum orci porta. In elementum risus quis justo luctus, quis lobortis est vestibulum. ", 
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [animationClass, setAnimationClass] = useState("");
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768); // Bootstrap 'lg' breakpoint (≥992px)
        };

        // Inicializar y escuchar cambios en el tamaño de la ventana
        handleResize();
        window.addEventListener("resize", handleResize);

        // Limpieza del evento al desmontar
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
  
    const nextCard = () => {
      setAnimationClass("fade-out-right");
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
        setAnimationClass("fade-in-left");
      }, 500);
    };
  
    const prevCard = () => {
      setAnimationClass("fade-out-left");
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
        setAnimationClass("fade-in-right");
      }, 500);
    };
  
    useEffect(() => {
      const interval = setInterval(() => {
        nextCard();
      }, 9000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
        <div className="d-flex row justify-content-center align-items-center w-100 mx-0 px-0 container-fluid">
            <div className="d-flex justify-content-center align-items-center">            
                <div className="pe-4" style={{display: isSmallScreen? 'none': ''}}>
                    <button className="btn btn-outline-secondary rounded-circle border-0 p-0" 
                        type="button" onClick={prevCard}
                    >
                        <img className="" src={SwitchLeft} alt="flecha izquierda" style={{height: "3rem"}}/>
                    </button>
                </div>
                <div
                    className={`transition ${animationClass}`}
                >
                    <ReviewCard 
                        name={cards[currentIndex].name}
                        date={cards[currentIndex].date}
                        text={cards[currentIndex].text}
                    />
                </div>
                <div className="ps-4" style={{display: isSmallScreen? 'none': ''}}>
                    <button className="btn btn-outline-secondary rounded-circle border-0 p-0" 
                        type="button"  onClick={nextCard}
                    >
                        <img className="" src={SwitchRight} alt="flecha derecha" style={{height: "3rem"}}/>
                    </button>
                </div>
            </div>
            <div className=" d-flex justify-content-center py-3">
                <div className="pe-3" style={{display: !isSmallScreen? 'none': ''}}>
                    <button className="btn btn-outline-secondary rounded-circle border-0 p-0" 
                        type="button" onClick={prevCard}
                    >
                        <img className="" src={SwitchLeft} alt="flecha izquierda" style={{height: "3rem"}}/>
                    </button>
                </div>

                <div className="ps-3" style={{display: !isSmallScreen? 'none': ''}}>
                    <button className="btn btn-outline-secondary rounded-circle border-0 p-0" 
                        type="button"  onClick={nextCard}
                    >
                        <img className="" src={SwitchRight} alt="flecha derecha" style={{height: "3rem"}}/>
                    </button>
                </div>

            </div>
      </div>
    );
}