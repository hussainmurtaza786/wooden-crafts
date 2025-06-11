import ExpertiseSection from "./components/Expertise";
import Vision from "./components/Vision";
import Working from "./components/Working";
import ContactPage from "./components/ContactPage";
import UniqueDesign from "./components/UniqueDesign";
import HeroSection from "./components/HeroSection";
import ChatBot from "../ChatBot";


export default function HomePage() {
    return (
        <>
            <HeroSection />
            <UniqueDesign />
            <ExpertiseSection />
            <Vision />
            <Working />
            <ContactPage />
            <ChatBot />
        </>
    );
}





