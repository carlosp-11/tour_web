import WhatsAppBusiness from '../assets/icons/ws-business.png';

export const WhatsAppButton = () => {
    const phoneNumber = "1234567890"; // Reemplaza con tu número de teléfono
    const message = "¡Hola! Quiero saber más sobre tus servicios."; // Mensaje predefinido
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    return(
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <img src={WhatsAppBusiness} alt='botón WhatsApp' style={{maxHeight: "6rem"}}/>
        </a>
    );
}