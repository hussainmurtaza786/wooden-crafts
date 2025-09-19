import { Metadata } from "next";
import ShopComingSoon from "./CommingSoon";
import Shop from "./Shop";
import { SITE_TITLE } from "@/app-config";


export const metadata: Metadata = {
    title: `Wooden Art & CNC Designs Shop | ${SITE_TITLE}`,
    description: `Explore the online shop of ${SITE_TITLE} – offering CNC wood cutting designs, handmade 3D artwork, home décor, kitchen utensils, furniture, and custom wooden wall art. Global trading and export available.`,
};

export default function Page() {

    return (
        <>
            <ShopComingSoon />
            {/* <Shop /> */}
        </>
    )
}