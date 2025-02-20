import { HeaderComponent } from "../components/HeaderComponent";
import { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";

export const Details =(state)=> {
    const location = useLocation();
    const property = location.state;
    
    useEffect(()=> {
        console.log(property);
    },[])
    
    return(
        <div>
            <div className="position-relative">
                <HeaderComponent tag={property.transaction} isDetail={true} image={property.media[0].url} />
            </div>
            <div className="col-6">
                <p>
                    {property.description}
                </p>
            </div>
        </div>
    )
}