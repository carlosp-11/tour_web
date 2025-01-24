import Mail from '../assets/icons/envelope-regular.png';
import WSBusiness from '../assets/icons/small-ws-bussiness.png';
import ScopeSVG from '../assets/svg/scope.svg';

export const ButtonImage = (props) => {
    const currentIcon = props.icon === 'mail' || props.icon === 'mail2' ? Mail : props.icon === 'scope' ? ScopeSVG : WSBusiness;
    const openWhatsApp = () => {
        const phoneNumber = '1234567890'; // Reemplaza con el número de teléfono (incluyendo el código del país, pero sin signos como '+').
        const message = encodeURIComponent('¡Hola! Quiero más información.'); // Opcional: mensaje predefinido.
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
        window.open(whatsappUrl, '_blank'); // Abre WhatsApp en una nueva pestaña o aplicación móvil.
      };
      const handleSendEmail = () => {
        const email = "example@example.com";
        const subject = "Consulta de contacto";
        const body = "Hola, estoy interesado en obtener más información.";
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return(   
        <button 
            className={`btn btn-primary fw-light nunito px-3
                ${ props.icon === 'mail' ? "btn-primary": props.icon === 'scope' || props.icon === 'mail2' ? "btn-secondary": "btn-danger" }`
            } 
            type="button"
            onClick={()=> props.icon=== 'whatsapp' ? openWhatsApp() : props.icon=== 'mail'? handleSendEmail(): props.someFunction()}
        >
            <p className='my-1'> {props.text} 
                <img className={`
                    ${props.icon === 'mail' || props.icon === 'scope'? "ms-2 mb-1": ''} `} 
                    style={
                        props.icon === 'mail2'?{height: "0.8rem", paddingLeft: 10} :
                        currentIcon=== Mail? 
                        {height: "0.8rem",}: currentIcon=== ScopeSVG ? 
                        {height: "1.1rem"} : 
                        {height: "1.7rem", paddingLeft: 5, marginTop: -5}
                    } 
                    src={currentIcon} alt="icono mail" 
                />
            </p>
            {/* <span className="ms-2">
                <img style={currentIcon=== Mail? {height: "0.8rem"}: currentIcon=== ScopeSVG? {height: "1.1rem"}:{height: "2.3rem", marginTop: -15, marginBottom: -10} } 
                    src={currentIcon} alt="icono mail" 
                />
            </span> */}
        </button>
    );
}