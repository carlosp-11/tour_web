import { useState, useEffect, useRef  } from 'react';
import Logo from '../assets/logos/navbar-tu-logo.png'

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
                <div className="container-fluid mx-3">
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
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="14"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                d="M1.5 3.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .354.854l-6 6a.5.5 0 0 1-.708 0l-6-6A.5.5 0 0 1 1.5 3.5z"
                                            />
                                        </svg>
                                    </span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#"  onClick={() => toggleDropdown("")}>
                                            Corta temporada
                                        </a>
                                    </li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li>
                                        <a className="dropdown-item" href="#"  onClick={() => toggleDropdown("")}>
                                            Larga temporada
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
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="14"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                d="M1.5 3.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .354.854l-6 6a.5.5 0 0 1-.708 0l-6-6A.5.5 0 0 1 1.5 3.5z"
                                            />
                                        </svg>
                                    </span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#" onClick={() => toggleDropdown("")}>
                                            Asesoria
                                        </a>
                                    </li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li>
                                        <a className="dropdown-item" href="#" onClick={() => toggleDropdown("")}>
                                            Gestión
                                        </a>
                                    </li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li>
                                        <a className="dropdown-item" href="#"  onClick={() => toggleDropdown("")}>
                                            Seguros
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
                                <button className="btn btn-primary" type="button">Contacto</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}