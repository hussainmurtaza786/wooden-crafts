import ExpertiseSection from "./components/Expertise";
import Vision from "./components/Vision";
import Working from "./components/Working";
import ContactPage from "./components/ContactSection";
import UniqueDesign from "./components/UniqueDesign";
import HeroSection from "./components/HeroSection";
import FeaturedProduct from "./components/FeaturedProduct";


export default function HomePage() {
    return (
        <>
            <HeroSection />
            <FeaturedProduct />
            <ExpertiseSection />
            <UniqueDesign />
            <Vision />
            <Working />
            <ContactPage />
        </>
    );
}





