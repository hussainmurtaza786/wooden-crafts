import ContactPage from "../home/components/ContactSection";
import AboutBanner from "./components/AboutBanner";
import Commitment from "./components/Commitment";
import ExplorePanel from "./components/ExplorePanel";
import AboutSection from "./components/AboutSection";
import PurposeAndWork from "./components/PurposeAndWorkWith";






export default function AboutPage() {
    return (
        <>
            <AboutBanner />
            <AboutSection />
            <PurposeAndWork />
            <Commitment />
            <ExplorePanel />
            <ContactPage />
        </>
    );
}
