import { useState, useEffect, useRef  } from 'react';
import {DropdownArrow} from './DropdownArrow';
import { ButtonImage } from './ButtonImage';
import Logo from '../assets/logos/navbar-tu-logo.png';
import RightArrow from '../assets/icons/right-arrow.png';

export const Navbar =(props)=> {
    const [openDropdown, setOpenDropdown] = useState(null); // Estado para controlar qué dropdown está abierto
    const alquileresRef = useRef(null); // Referencia para el dropdown de "alquileres"
    const serviciosRef = useRef(null);

    const toggleDropdown = (dropdownName) => {
        setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
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
    
        // Agregar el evento de escucha para clics
        document.addEventListener('click', handleClickOutside);
    
        // Limpiar el evento cuando el componente se desmonte
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, []);

    return (
        <div className="w-100 bg-white">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid mx-4">
                    <a className="navbar-brand" href="#">
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
                                <a className="nav-link" href="#">
                                    Comprar
                                </a>
                            </li>
                            <li className="nav-item dropdown mx-1"  ref={alquileresRef}>
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    // data-bs-auto-close="true"
                                    onClick={() => toggleDropdown("alquileres")}
                                >
                                    Alquileres
                                    <span className={`dropdown-arrow ${openDropdown === "alquileres" ? "rotate" : ""}`}>
                                        <DropdownArrow/>
                                    </span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item pb-2" href="#"  onClick={() => toggleDropdown("")}>
                                            <span className="link-text">Corta temporada 
                                                <span className="arrow-icon">
                                                    <img src={RightArrow} alt="flecha" style={{height: '0.7rem'}}/> 
                                                </span> 
                                            </span>
                                            <span className="tooltip-text mx-5 mb-2 pb-1">1 - 6 meses</span>
                                            <span className="arrow-icon"></span>
                                        </a>
                                    </li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li>
                                        <a className="dropdown-item pb-2" href="#"  onClick={() => toggleDropdown("")}>
                                            <span className="link-text">Larga temporada 
                                                <span className="arrow-icon">
                                                    <img src={RightArrow} alt="flecha" style={{height: '0.7rem'}}/> 
                                                </span> 
                                            </span>
                                            <span className="tooltip-text mx-5 mb-2 pb-1"> {'>'} 1 año</span>
                                            <span className="arrow-icon"></span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item mx-1">
                                <a className="nav-link" href="#">
                                    Vender
                                </a>
                            </li>
                            <li className="nav-item dropdown mx-1"  ref={serviciosRef}>
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                   // data-bs-auto-close="true"
                                    onClick={() => toggleDropdown("servicios")}
                                >
                                    Servicios
                                    <span className={`dropdown-arrow ${openDropdown === "servicios" ? "rotate" : ""}`}>
                                       <DropdownArrow/>
                                    </span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#" onClick={() => toggleDropdown("")}>
                                            <span className="link-text"> Asesoría 
                                                <span className="arrow-icon">
                                                    <img src={RightArrow} alt="flecha" style={{height: '0.7rem'}}/> 
                                                </span> 
                                            </span>
                                        </a>
                                    </li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li>
                                        <a className="dropdown-item" href="#" onClick={() => toggleDropdown("")}>
                                        <span className="link-text">Gestión
                                                <span className="arrow-icon">
                                                    <img src={RightArrow} alt="flecha" style={{height: '0.7rem'}}/> 
                                                </span> 
                                            </span>
                                        </a>
                                    </li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li>
                                        <a className="dropdown-item" href="#"  onClick={() => toggleDropdown("")}>
                                            <span className="link-text"> Seguros 
                                                <span className="arrow-icon">
                                                    <img src={RightArrow} alt="flecha" style={{height: '0.7rem'}}/> 
                                                </span> 
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item mx-1">
                                <a className="nav-link" href="#">
                                    Nosotros
                                </a>
                            </li>
                            <li className='mx-4'>
                                <ButtonImage text='Contacto' icon= 'mail' />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}