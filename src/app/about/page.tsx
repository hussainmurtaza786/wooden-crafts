import ContactPage from "../home/components/ContactPage";
import AboutBanner from "./components/AboutBanner";
import Commitment from "./components/Commitment";
import ExplorePanel from "./components/ExplorePanel";
import AboutSection from "./components/AboutSection";
import PurposeAndWork from "./components/PurposeAndWorkWith";






export default function AboutPage() {
    return (
        <>
            <AboutSection />
            <AboutBanner />
            <PurposeAndWork />
            <Commitment />
            <ExplorePanel />
            <ContactPage />
        </>
    );
}
