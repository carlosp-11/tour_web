import { PillsComponent } from "./PillsComponent";
import { PropertiesCard } from "./PropertiesCard";

export const PropertiesJumbotron =()=> {
    return (
        <div>
            <div className="row py-5">
                <h1>Propiedades destacadas</h1>
                <div className="col-12 col-lg-8">
                    <PillsComponent/>
                </div>
                <div className="col-4">
                    <p>Ver todos los inmuebles</p>
                </div>
                <div className="row">
                    <div className='col-12 col-lg-4'>
                        <PropertiesCard/>
                    </div>
                    <div className='col-12 col-lg-4'>
                        <PropertiesCard/>
                    </div>
                    <div className='col-12 col-lg-4'>
                        <PropertiesCard/>
                    </div>
                </div>
            </div>
        </div>
    );
}