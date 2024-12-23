import { ReviewCarrousel } from "../components/ReviewCarrousel";
import { ServicesJumbotron } from "../components/ServicesJumbotron";
import { FinalJumbotron } from "../components/FinalJumbotron";

export const Home = () => {
    return (
        <div className="">
            <ServicesJumbotron/>
            <ReviewCarrousel/>
            <FinalJumbotron/>
        </div>
    );
};