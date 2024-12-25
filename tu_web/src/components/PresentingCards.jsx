import '../styles/PresentingCards.css'

export const PresentingCard = (props) => {
    return (
        <div className="presenting-card rounded-5 d-flex align-items-end" 
            style={{
                backgroundImage: `url(${props.image})`
            }}
        >
            <div className="green-overlay"></div>
            <span  className="overlay row">
                <h5 className="text-content py-2">{props.text}</h5>
            </span>
        </div>
    );
}