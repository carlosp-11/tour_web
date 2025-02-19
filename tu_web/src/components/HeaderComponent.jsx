export const HeaderComponent = (props) => {
    return (
        <div className="w-100 container-fluid mx-0 px-0 position-relative">
            <img src={props.image} alt="header" className="" style={{width:'100%', height: '30vh', objectFit:'cover' }}/>
            <p className="raleway ps-4 py-3 d-none d-lg-block" style={{fontSize: 12}}>Inicio /  <span className="fw-bold">{props.tag}</span> </p>
            <p className="raleway-bold position-absolute fs-1 text-white top-50 start-50 translate-middle d-lg-none" style={{top: 100,}}> {props.tag} </p>
        </div>
    );
}