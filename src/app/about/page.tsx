import ContactPage from "../home/components/ContactPage";
import AboutBanner from "./components/AboutBanner";
import Commitment from "./components/Commitment";
import ExplorePanel from "./components/ExplorePanel";
import PurposeAndWork from "./components/PurposeAndWorkWith";






export default function HomePage() {
    return (
        <>
            <AboutBanner />
            <PurposeAndWork />
            <Commitment />
            <ExplorePanel />
            <ContactPage />
        </>
    );
}
