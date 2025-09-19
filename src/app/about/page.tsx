import ContactPage from "../home/components/ContactSection";
import AboutBanner from "./components/AboutBanner";
import Commitment from "./components/Commitment";
import ExplorePanel from "./components/ExplorePanel";
import AboutSection from "./components/AboutSection";
import PurposeAndWork from "./components/PurposeAndWorkWith";
import { Metadata } from "next";
import { SITE_TITLE } from "@/app-config";

export const metadata: Metadata = {
    title: `About ${SITE_TITLE} | Custom Wooden Art, CNC Cutting & Global Trading`,
    description: `${SITE_TITLE} specializes in CNC wood cutting, handmade 3D wooden artwork, home décor, kitchen items, furniture, and laser cutting. Based in Karachi, we also export worldwide with custom order designs.`,
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
