import HeroSection from "./components/HeroSection";
import ExpertiseSection from "./components/Expertise";
import Vision from "./components/Vision";
import Working from "./components/Working";
import ContactPage from "./components/ContactPage";


export default function HomePage() {
    return (
        <>
            <HeroSection />
            <ExpertiseSection />
            <Vision />
            <Working />
            <ContactPage />
        </>
    );
}
