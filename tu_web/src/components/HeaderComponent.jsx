export const HeaderComponent = (props) => {
    return (
        <div className="w-100 container-fluid mx-0 px-0 position-relative">
            <img src={props.image} alt="header" className="" style={{width:'100%', height: props.isDetail? '25rem' : '30vh', objectFit:'cover' }}/>
            <p className={`raleway ps-4 py-3 ${ props.isDetail? '': 'd-none d-lg-block'}`} style={{fontSize: 12}}>Inicio /  <span className="fw-bold text-capitalize">{props.tag}</span> </p>
            {!props.isDetail && (<p className="raleway-bold position-absolute fs-1 text-white top-50 start-50 translate-middle d-lg-none" style={{top: 100,}}> {props.tag} </p>)}
        </div>
    );
}