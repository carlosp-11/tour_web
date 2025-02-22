import { PropertiesCard } from "./PropertiesCard"
import SwitchLeft from '../assets/icons/switch-left-arrow.png'
import SwitchRight from '../assets/icons/switch-right-arrow.png'

export const PaginationComponent = (props) => {
    return(
        <div>
            <div className="row col-12 justify-content-center mx-0">
                 {props.properties.map((item, index) => (
                    <div className="col-auto px-5 px-md-2 px-lg-2 px-xl-2" style={{maxWidth: 385}} key={index}>
                        <PropertiesCard 
                            key={index}
                            number={index}
                            type={item.type}
                            price={item.price}
                            name={item.name}
                            area={item.area}
                            rooms={item.bedrooms}
                            bathrooms={item.bathrooms}
                            location={item.town?.name}
                            image={item.media !== undefined? item.media[0]?.url: ''}
                            data={item}
                        />
                    </div>
                ))}
            </div>
            <div className="d-flex justify-content-center py-5">
                <nav aria-label="Page navigation example" className="py-5">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="" href="#"> 
                                <button className="btn btn-outline-secondary rounded-circle border-0 p-0" 
                                    type="button"
                                    disabled={true} 
                                    //onClick={prevCard}
                                >
                                    <img className="" src={SwitchLeft} alt="flecha izquierda" style={{height: "2rem"}}/>
                                </button>
                            </a>
                        </li>
                        <li className="page-item"><a className="raleway fs-4 text-success link-underline link-underline-opacity-0 px-3" href="#">1</a></li>
                        {/* <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li> */}
                        <li className="page-item">
                        <a className="" href="#"> 
                                <button className="btn btn-outline-secondary rounded-circle border-0 p-0" 
                                    type="button"
                                    disabled={true}
                                    //onClick={prevCard}
                                >
                                    <img className="" src={SwitchRight} alt="flecha izquierda" style={{height: "2rem"}}/>
                                </button>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}