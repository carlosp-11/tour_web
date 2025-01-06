import { ReviewCarrousel } from "../components/ReviewCarrousel";
import { ServicesJumbotron } from "../components/ServicesJumbotron";
import { FinalJumbotron } from "../components/FinalJumbotron";
import { FirstJumbotron } from "../components/Firstjumbotron";
import { PresentingJumbotron } from "../components/PresentingJumbotron";
import { PropertiesJumbotron } from "../components/PropertiesJumbotron";

export const Home = () => {
    return (
        <div className="">
            <FirstJumbotron/>
            <PresentingJumbotron/>
            <PropertiesJumbotron/>
            <ServicesJumbotron/>
            <ReviewCarrousel/>
            <FinalJumbotron/>
        </div>
    );
};