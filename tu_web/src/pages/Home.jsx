import { ReviewCarrousel } from "../components/ReviewCarrousel";
import { ServicesJumbotron } from "../components/ServicesJumbotron";
import { FinalJumbotron } from "../components/FinalJumbotron";
import { FirstJumbotron } from "../components/Firstjumbotron";
import { PresentingJumbotron } from "../components/PresentingJumbotron";

export const Home = () => {
    return (
        <div className="">
            <FirstJumbotron/>
            <PresentingJumbotron/>
            <ServicesJumbotron/>
            <ReviewCarrousel/>
            <FinalJumbotron/>
        </div>
    );
};