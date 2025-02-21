import WhatsAppBusiness from '../assets/icons/ws-business.png';

export const WhatsAppButton = () => {
    const phoneNumber = `${import.meta.env.VITE_INFO_NUMBER}`;
    const message = "¡Hola! Quiero saber más sobre tus servicios."; // Mensaje predefinido
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    return(
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <img src={WhatsAppBusiness} alt='botón WhatsApp' style={{maxHeight: "6rem"}}/>
        </a>
    );
}