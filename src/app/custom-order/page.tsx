import { Metadata } from "next";
import { SITE_TITLE } from "@/app-config";
import CustomOrderForm from "./components/CustomOrderForm";

export const metadata: Metadata = {
    title: `Custom Wooden Designs | Order CNC & Handmade Art at ${SITE_TITLE}`,
    description: `Place your custom wooden order with ${SITE_TITLE}. From CNC wood cutting to handmade 3D artwork, home décor, kitchen items, and furniture – upload your design and size, and we’ll craft it for you with expert precision.`,
};


export default function CustomOrderPage() {
    return (
        <CustomOrderForm />
    )
}