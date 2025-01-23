import '../styles/PresentingCards.css'
import CircleArrow from '../assets/svg/circle-arrow-right-grey.svg';

export const PresentingCard = (props) => {
    return (
        <div
            className="presenting-card rounded-5 d-flex align-items-end raleway"
            style={{
                backgroundImage: `url(${props.image})`,
            }}
        >
            <div className="green-overlay"></div>
            <div className="card-texts ">
                <p 
                    className="card-text-bottom" 
                >
                    {props.text}
                </p>
                <p 
                    className="card-text-center" 
                    style={{ textAlign: 'center', margin: '0 16px', whiteSpace: 'pre-wrap' }}
                >
                    <span style={{fontSize:20, backgroundColor:'', padding: 0, margin: 0, width: '70%'}}> {props.text} </span> 
                    <span className="arrow-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            className="circle-arrow"
                        >
                            <g id="Grupo_372917" data-name="Grupo 372917">
                            <circle
                                id="Elipse_1"
                                data-name="Elipse 1"
                                cx="18"
                                cy="18"
                                r="18"
                                fill="#eef2f2"
                                className="circle-background"
                            />
                            <path
                                id="arrow-right-solid"
                                d="M14.832,7.008a1.046,1.046,0,0,0,0-1.479L9.608.306A1.046,1.046,0,0,0,8.13,1.785l3.444,3.441H2.85C2.272,5.226,1.8,6.271,1.8,6.271S2.272,7.315,2.85,7.315H11.57L8.133,10.756a1.046,1.046,0,1,0,1.479,1.479l5.223-5.223Z"
                                transform="translate(10 11.73)"
                                fill="#000"
                            />
                            </g>
                        </svg>
                    </span>
                </p>
            </div>
        </div>
    );
}