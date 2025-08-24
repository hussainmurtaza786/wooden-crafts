import ContactPage from "../home/components/ContactSection";
import AboutBanner from "./components/AboutBanner";
import Commitment from "./components/Commitment";
import ExplorePanel from "./components/ExplorePanel";
import AboutSection from "./components/AboutSection";
import PurposeAndWork from "./components/PurposeAndWorkWith";
import { Metadata } from "next";
import { PAGES, SITE_DESCRIPTION, SITE_TITLE } from "@/app-config";


export const metadata: Metadata = {
    title: `${PAGES.About.title} - ${SITE_TITLE}`,
    description: SITE_DESCRIPTION,
};



export default function AboutPage() {
    return (
        <>
            <AboutBanner />
            <AboutSection />
            <PurposeAndWork />
            {/* <Commitment /> */}
            {/* <ExplorePanel /> */}
            {/* <ContactPage /> */}
        </>
    );
}
