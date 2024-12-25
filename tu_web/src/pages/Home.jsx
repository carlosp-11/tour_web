import { ReviewCarrousel } from "../components/ReviewCarrousel";
import { ServicesJumbotron } from "../components/ServicesJumbotron";
import { FinalJumbotron } from "../components/FinalJumbotron";
import { FirstJumbotron } from "../components/Firstjumbotron";

export const Home = () => {
    return (
        <div className="">
            <FirstJumbotron/>
            <ServicesJumbotron/>
            <ReviewCarrousel/>
            <FinalJumbotron/>
        </div>
    );
};