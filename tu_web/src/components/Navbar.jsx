
export const Navbar =(props)=> {

    return (
        <div className="w-100 bg-white">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Logo</a>
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
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link" href="#">
                                Comprar
                            </a>
                            </li>
                            <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                data-bs-auto-close="true"
                                aria-expanded="false"
                            >
                                Alquileres
                            </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Corta temporada</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Larga temporada</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">
                                Vender
                            </a>
                            </li>
                            <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                data-bs-auto-close="true"
                            >
                                Servicios
                            </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Asesoria</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Gestión</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Seguros</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Nosotros
                                </a>
                            </li>
                            <li>
                                <button className="btn btn-primary" type="button">Contacto</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}