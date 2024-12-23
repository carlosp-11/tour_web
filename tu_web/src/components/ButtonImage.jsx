import Mail from '../assets/icons/envelope-regular.png';
import Scope from '../assets/icons/scope.png';
import WSBusiness from '../assets/icons/small-ws-bussiness.png';

export const ButtonImage = (props) => {
    const currentIcon = props.icon === 'mail' ? Mail : props.icon === 'scope' ? Scope : WSBusiness;

    return(   
        <button className={`btn btn-primary ${ props.icon === 'mail' ? "btn-primary": props.icon === 'scope' ? "btn-secondary": "btn-danger" }`} type="button">
            {props.text}
            <span className="ms-2">
                <img style={currentIcon=== Mail? {height: "0.8rem"}: currentIcon=== Scope? {height: "1.1rem"}:{height: "2.3rem", marginTop: -15, marginBottom: -10} } 
                    src={currentIcon} alt="icono mail" 
                />
            </span>
        </button>
    );
}