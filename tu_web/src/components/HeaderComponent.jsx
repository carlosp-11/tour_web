export const HeaderComponent = (props) => {
    return (
        <div className="w-100 container-fluid mx-0 px-0">
            <img src={props.image} alt="header" style={{width:'100%', height: '30vh', objectFit:'cover' }}/>
            <p className="raleway ps-5 py-3" style={{fontSize: 12}}>Inicio /  <span className="fw-bold">{props.tag}</span> </p>
        </div>
    );
}