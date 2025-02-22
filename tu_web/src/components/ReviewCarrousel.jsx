import { useEffect, useState } from "react";
import { ReviewCard } from "./ReviewCard";
import SwitchLeft from '../assets/icons/switch-left-arrow.png'
import SwitchRight from '../assets/icons/switch-right-arrow.png'

export const ReviewCarrousel = () => {

    const cards =[
        {
            number: 1,
            name:"Alejandro", 
            date: "AGOSTO 2024",
            text:"La atención fue excelente, siempre amable y efectiva. Es una profesional seria y comprometida, algo difícil de encontrar hoy en día. Ella realmente se interesa por ayudarte en todo lo posible. La recomiendo totalmente. "
        },
        {
            number: 2,
            name:"Ana", 
            date: "DICIEMBRE 2024",
            text:"Yolanda escucha lo que necesitas para encontrar la vivienda ideal para ti. Si buscas un servicio confiable y eficiente, sin duda es la mejor opción. Recomendado 100%.", 
        },
        {
            number: 3,
            name:"Francisco", 
            date: "JUNIO 2024",
            text:"Ofrece opciones de casas y apartamentos muy bien seleccionadas. Además, la cordialidad y el compromiso que demuestra generan confianza. Sin duda, una inmobiliaria con la que vale la pena trabajar.", 
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
        <div className="d-flex row justify-content-center align-items-center w-100 mx-0 px-0">
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
                        number={cards[currentIndex].number}
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