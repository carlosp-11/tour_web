import { useLocation } from 'react-router-dom';
import { LegalText } from "../components/LegalText";
import { CookiesText } from "../components/CookiesText";
import { PrivacyText } from "../components/PrivacyText";

export const LegalAdvice = ()=> {
    const location = useLocation();

    const renderContent = () => {
        switch (location.pathname) {
          case '/politica-privacidad':
            return <PrivacyText/>;
          case '/politica-cookies':
            return <CookiesText/>;
          case '/aviso-legal':
            return <LegalText/>;
          default:
            return <h1>Contenido no encontrado</h1>;
        }
      };

    return (
        <div className=" py-5 px-3">
            {renderContent()}
        </div>
    );
}