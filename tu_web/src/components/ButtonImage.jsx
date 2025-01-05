import Mail from '../assets/icons/envelope-regular.png';
import WSBusiness from '../assets/icons/small-ws-bussiness.png';
import ScopeSVG from '../assets/svg/scope.svg';

export const ButtonImage = (props) => {
    const currentIcon = props.icon === 'mail' ? Mail : props.icon === 'scope' ? ScopeSVG : WSBusiness;
    const openWhatsApp = () => {
        const phoneNumber = '1234567890'; // Reemplaza con el número de teléfono (incluyendo el código del país, pero sin signos como '+').
        const message = encodeURIComponent('¡Hola! Quiero más información.'); // Opcional: mensaje predefinido.
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
        window.open(whatsappUrl, '_blank'); // Abre WhatsApp en una nueva pestaña o aplicación móvil.
      };

    return(   
        <button className={`btn btn-primary ${ props.icon === 'mail' ? "btn-primary": props.icon === 'scope' ? "btn-secondary": "btn-danger" }`} type="button"
            onClick={()=> props.icon=== 'whatsapp' ? openWhatsApp() : props.someFunction()}
        >
            <span> {props.text} </span>
            <span className="">
                <img style={currentIcon=== Mail? {height: "0.8rem"}: currentIcon=== ScopeSVG? {height: "1.1rem"}:{height: "2.3rem", marginTop: -15, marginBottom: -10} } 
                    src={currentIcon} alt="icono mail" 
                />
            </span>
        </button>
    );
}