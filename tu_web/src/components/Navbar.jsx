import { useState, useEffect, useRef  } from 'react';
import { useNavigate } from 'react-router-dom';
import {DropdownArrow} from './DropdownArrow';
import { DropdownLink } from './DropdownLink';
import { ButtonImage } from './ButtonImage';
import Logo from '../assets/logos/navbar-tu-logo.png';

export const Navbar =({ bottomRef })=> {
    const navigate =useNavigate();
    const [openDropdown, setOpenDropdown] = useState(null); // Estado para controlar qué dropdown está abierto
    const alquileresRef = useRef(null); // Referencia para el dropdown de "alquileres"
    const serviciosRef = useRef(null);

    const toggleDropdown = (dropdownName) => {
        setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
    };

    const handleScrollOrNavigate = (sectionId) => {
        if (window.location.pathname === "/servicios") {
            // Si ya está en la página, hacer scroll suave
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            // Si no está en la página, navegar primero y luego hacer scroll
            navigate("/servicios");
            setTimeout(() => {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                }
            }, 500); // Retraso para asegurar que la página cargue primero
        }
    };
    
    
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                (alquileresRef.current && !alquileresRef.current.contains(event.target)) &&
                (serviciosRef.current && !serviciosRef.current.contains(event.target))
            ) {
            setOpenDropdown(null); // Cerrar el dropdown si el clic está fuera
          }
        };
        
        document.addEventListener('click', handleClickOutside); // Agregar el evento de escucha para clics
    
        return () => {
          document.removeEventListener('click', handleClickOutside); // Limpiar el evento cuando el componente se desmonte
        };
      }, []);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary raleway">
            <div className="container-fluid mx-4">
                <a className="navbar-brand" role='button' onClick={()=>navigate('/')}>
                    <img style={{height: "4rem"}} src={Logo} alt="logo turismo urbano" />
                </a>
                <button className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-1">
                            <a className="nav-link" role='button' onClick={()=>navigate('/comprar')}>Comprar</a>
                        </li>
                        <li className="nav-item dropdown mx-1"  ref={alquileresRef}>
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                onClick={() => toggleDropdown("alquileres")}
                            >
                                Alquileres
                                <span className={`dropdown-arrow ${openDropdown === "alquileres" ? "rotate" : ""}`}>
                                    <DropdownArrow/>
                                </span>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a role='button' onClick={()=>navigate('/alquilar')}>
                                        <DropdownLink text="Corta temporada" subtitle="1 - 6 meses" linkFunction={toggleDropdown}/>
                                    </a>
                                </li>
                                <li><hr className="dropdown-divider"/></li>
                                <li>
                                    <DropdownLink text="Larga temporada" subtitle="> 1 año" linkFunction={toggleDropdown}/>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item mx-1">
                            <a role='button' className="nav-link" onClick={()=>navigate('/vender')}>Vender</a>
                        </li>
                        <li className="nav-item dropdown mx-1"  ref={serviciosRef}>
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                onClick={() => toggleDropdown("servicios")}
                            >
                                Servicios
                                <span className={`dropdown-arrow ${openDropdown === "servicios" ? "rotate" : ""}`}>
                                    <DropdownArrow/>
                                </span>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a role='button' onClick={() => handleScrollOrNavigate("asesoriaJumbotron")}>
                                        <DropdownLink text="Asesoría" linkFunction={toggleDropdown}/>
                                    </a>
                                </li>
                                <li><hr className="dropdown-divider"/></li>
                                <li>
                                    <a role='button' onClick={() => handleScrollOrNavigate("gestionJumbotron")}>
                                        <DropdownLink text="Gestión" linkFunction={toggleDropdown}/>
                                    </a>
                                </li>
                                <li><hr className="dropdown-divider"/></li>
                                <li>
                                    <a role='button' onClick={() => handleScrollOrNavigate("segurosJumbotron")}>
                                        <DropdownLink text="Seguros" linkFunction={toggleDropdown}/>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item mx-1">
                            <a className="nav-link"  role='button'  onClick={()=>navigate('/nosotros')}> Nosotros </a>
                        </li>
                        <li className='mx-4'>
                            <ButtonImage text='Contacto' icon= 'mail'/>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
