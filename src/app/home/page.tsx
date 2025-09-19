import ExpertiseSection from "./components/Expertise";
import Vision from "./components/Vision";
import Working from "./components/Working";
import ContactPage from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import FeaturedProduct from "./components/FeaturedProduct";
import AboutUs from "./components/About-Us";
import { Metadata } from "next";
import { SITE_TITLE } from "@/app-config";

export const metadata: Metadata = {
    title: `CNC Wooden Designs, Handmade Artwork & Export Company | ${SITE_TITLE}`,
    description: `${SITE_TITLE} is a leading trading company in Karachi, Pakistan. We specialize in CNC wood cutting, handmade 3D artwork, custom furniture, home décor, kitchen utensils, and wooden wall art. Order worldwide with custom design services.`,
};


export default function HomePage() {
    return (
        <>
            <HeroSection />
            <AboutUs />
            {/* <FeaturedProduct /> */}
            <ExpertiseSection />
            {/* <UniqueDesign /> */}
            <Vision />
            <Working />
            {/* <ContactPage /> */}
        </>
    );
}





