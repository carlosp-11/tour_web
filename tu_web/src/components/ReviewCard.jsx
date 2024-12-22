import { useState, useEffect } from "react";
import Photo from '../assets/pictures/review-pic.png'

export const ReviewCard =(props)=> {
    const firstData= {
        name:"José", 
        date: "Agosto 2024",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat lacus a purus rhoncus pellentesque eu nec mauris. Maecenas at lacus nunc. Quisque pellentesque metus dui, in blandit nisl pulvinar quis. Sed eget erat rhoncus, commodo dui sit amet, sagittis arcu."
    };
    const secondData= {
        name:"María", 
        date: "Diciembre 2024",
        text:"Integer condimentum vestibulum odio at mattis. Donec pharetra sem in porttitor mattis. Nam pellentesque nunc in dignissim tempor. Nullam pharetra posuere varius. Proin vitae magna eu erat facilisis interdum. Mauris vel massa sed felis auctor eleifend. Donec ultricies elit id metus aliquam congue. Ut consectetur leo a ornare egestas. Maecenas eu tortor aliquet, aliquam arcu nec, aliquam augue. Mauris non massa laoreet, rutrum massa vel, tincidunt lorem. ", 
    };
    
    const thirdData= {
        name:"Jesús", 
        date: "Junio 2024",
        text:"Cras facilisis libero sem, id bibendum mauris dictum quis. Nunc ac malesuada est. Morbi mollis ipsum vel eros hendrerit, quis fermentum orci porta. In elementum risus quis justo luctus, quis lobortis est vestibulum. Vivamus vestibulum enim lacus. Donec interdum volutpat vulputate. Fusce maximus fermentum lorem et scelerisque. Aliquam porta lectus. ", 
    };

    const [cardData, setCardData] = useState(firstData);

    useEffect(() => {
        if (props.number === "second") setCardData(secondData);
        else if (props.number === "third") setCardData(thirdData);
        else setCardData(firstData);
    }, [props.number]);

    return(
        <div className="card mx-5 bg-secondary rounded-5" style={{height: "35rem"}}>
            <div className="card-body d-flex row align-items-center">
                <p className="card-text align-self-end">{cardData.text} </p>
                <div className="d-flex justify-content-center align-self-end">
                    <img src={Photo} alt="foto de usuario" style={{height: "4rem"}} className=""/>
                    <div className="ms-3 text-start">
                        <h3 className="card-title">{cardData.name}</h3>
                        <p className="card-text">{cardData.date} </p>
                    </div>
                </div>
            </div>
        </div>
    );
}