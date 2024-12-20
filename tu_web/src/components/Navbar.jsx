import { useState } from "react";


export const Navbar =(props)=> {

      // Estado para almacenar el enlace activo
    const [activeLink, setActiveLink] = useState("");

    // Función para manejar el clic en un enlace
    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div className="w-100 bg-white">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Logo</a>
                    <button class="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <a
                                className={`nav-link ${activeLink === "comprar" ? "text-success" : ""}`}
                                href="#"
                                onClick={() => handleLinkClick("comprar")}
                                >
                                Comprar
                            </a>
                            </li>
                            <li class="nav-item dropdown">
                            <a
                                className={`nav-link dropdown-toggle ${activeLink === "alquileres" ? "text-success" : ""}`}
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                data-bs-auto-close="true"
                                aria-expanded="false"
                                //onClick={() => handleLinkClick("alquileres")}
                            >
                                Alquileres
                            </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Corta temporada</a></li>
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><a class="dropdown-item" href="#">Larga temporada</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                            <a
                                className={`nav-link ${activeLink === "vender" ? "text-success" : ""}`}
                                href="#"
                                onClick={() => handleLinkClick("vender")}
                            >
                                Vender
                            </a>
                            </li>
                            <li class="nav-item dropdown">
                            <a
                                className={`nav-link dropdown-toggle ${activeLink === "servicios" ? "text-success" : ""}`}
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                data-bs-auto-close="true"
                               // onClick={() => handleLinkClick("servicios")}
                            >
                                Servicios
                            </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Asesoria</a></li>
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><a class="dropdown-item" href="#">Gestión</a></li>
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><a class="dropdown-item" href="#">Seguros</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a
                                    className={`nav-link ${activeLink === "nosotros" ? "text-success" : ""}`}
                                    href="#"
                                    onClick={() => handleLinkClick("nosotros")}
                                >
                                    Nosotros
                                </a>
                            </li>
                            <li>
                                <button class="btn btn-primary" type="button">Contacto</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}