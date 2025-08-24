import { PAGES, SITE_DESCRIPTION, SITE_TITLE } from "@/app-config";
import ContactPage from "./components/ContactPage";
import FAQs from "./components/Faqs";
import WhyContactUs from "./components/WhyContact";
import { Metadata } from "next";




export const metadata: Metadata = {
    title: `${PAGES.Contact.title} - ${SITE_TITLE}`,
    description: SITE_DESCRIPTION,
};

export default function Contact() {
    return (
        <>
            <WhyContactUs />
            <ContactPage />
            <FAQs />
        </>
    )
}