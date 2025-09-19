import { SITE_TITLE } from "@/app-config";
import ContactPage from "./components/ContactPage";
import FAQs from "./components/Faqs";
import WhyContactUs from "./components/WhyContact";
import { Metadata } from "next";



export const metadata: Metadata = {
    title: `Contact ${SITE_TITLE} | Wooden Art, CNC Cutting & Export Services`,
    description: `Get in touch with ${SITE_TITLE} for CNC wood cutting, handmade 3D artwork, wooden home décor, furniture, kitchen items, and global export services. Contact us today for custom wooden designs.`,
};


export default function Contact() {
    return (
        <>
            {/* <WhyContactUs /> */}
            <ContactPage />
            <FAQs />
        </>
    )
}