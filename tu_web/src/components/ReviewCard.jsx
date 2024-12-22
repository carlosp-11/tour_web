import { useState, useEffect } from "react";

export const ReviewCard =(props)=> {
    const firstData= {name:"José", text:"Lorem ipsum 1", date: "Agosto 2024"};
    const secondData= {name:"María", text:"Lorem ipsum 2", date: "Diciembre 2024"};
    const thirdData= {name:"Jesús", text:"Lorem ipsum 3", date: "Junio 2024"};

    const [cardData, setCardData] = useState(firstData);

    useEffect(() => {
        if (props.number === "second") setCardData(secondData);
        else if (props.number === "third") setCardData(thirdData);
        else setCardData(firstData);
    }, [props.number]);

    return(
        <div class="card mx-5 bg-secondary rounded-5" style={{minHeight: "35rem"}}>
            <div class="card-body">
                <p class="card-text">{cardData.text} </p>
                <h3 class="card-title">{cardData.name}</h3>
                <p class="card-text">{cardData.date} </p>
                <p></p>
            </div>
        </div>
    );
}