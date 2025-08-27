import { PAGES, SITE_DESCRIPTION, SITE_TITLE } from "@/app-config";
import { Metadata } from "next";
import HomePage from './home/page'


export const metadata: Metadata = {
  title: `Custom Wooden Furniture, Decor & Frames | - ${SITE_TITLE}`,
  description: SITE_DESCRIPTION,
};

export default HomePage;



