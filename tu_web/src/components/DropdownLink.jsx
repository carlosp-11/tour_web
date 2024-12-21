import RightArrow from '../assets/icons/right-arrow.png';

export const DropdownLink = (props) => {
    return(
         <a className="dropdown-item pb-2" href="#"  onClick={() => props.linkFunction("")}>
            <span className="link-text">{props.text}
                <span className="arrow-icon">
                    <img src={RightArrow} alt="flecha" style={{height: '0.7rem'}}/> 
                </span> 
            </span>
            {props.subtitle && (<span className="tooltip-text mx-5 mb-2 pb-1">{props.subtitle}</span>)}
            <span className="arrow-icon"></span>
        </a>
    );
}