// import { ReviewCarrousel } from "../components/ReviewCarrousel";
import { ReviewJumbotron } from "../components/ReviewJumbotron";
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
            <ReviewJumbotron/>
            <FinalJumbotron/>
        </div>
    );
};